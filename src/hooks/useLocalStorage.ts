import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent;
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

type PrimitiveString = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'null' | 'undefined';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  type: PrimitiveString,
  validatorFn: (rawValue: T) => boolean = () => true
): [T, SetValue<T>] {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);

      if (!item) {
        return initialValue;
      }

      const parsedItem = parseJSON(item) as T;

      if (typeof parsedItem !== type || !validatorFn(parsedItem)) {
        return initialValue;
      }

      return parsedItem;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: SetValue<T> = useCallback(
    (value) => {
      // Prevent build error "window is undefined" but keeps working
      if (typeof window === 'undefined') {
        console.warn(
          `Tried setting localStorage key “${key}” even though environment is not a client`
        );
      }

      try {
        // Allow value to be a function so we have the same API as useState
        const newValue = value instanceof Function ? value(storedValue) : value;

        if (newValue === storedValue) {
          return;
        }

        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(newValue));

        // Save state
        setStoredValue(newValue);

        // We dispatch a custom event so every useLocalStorage hook are notified
        window.dispatchEvent(new Event('local-storage'));
      } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key, storedValue]
  );

  useEffect(() => {
    setStoredValue(readValue());
  }, []);

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent | null) => {
      const storageEvent = event as StorageEvent | null;
      if (storageEvent?.key && storageEvent.key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key]
  );

  // this only works for other documents, not the current one
  useEventListener('storage', handleStorageChange);

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener('local-storage', handleStorageChange);

  return [storedValue, setValue];
}

function parseJSON<T extends object>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : (JSON.parse(value ?? '') as T);
  } catch {
    console.log('parsing error on', { value });
    return undefined;
  }
}
