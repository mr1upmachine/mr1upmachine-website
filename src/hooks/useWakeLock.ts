import { useState, useEffect, useCallback } from 'react';

type WakeLockSentinel = {
  release: () => Promise<void>;
  type: string;
  addEventListener: (type: 'release', listener: () => void) => void;
  removeEventListener: (type: 'release', listener: () => void) => void;
};

export const useWakeLock = () => {
  const [isWakeLockActive, setIsWakeLockActive] = useState<boolean>(false);
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);

  const requestWakeLock = useCallback(async () => {
    if ('wakeLock' in navigator && navigator.wakeLock) {
      try {
        const lock = await navigator.wakeLock.request('screen');
        setWakeLock(lock);
        setIsWakeLockActive(true);

        // Automatically release the wake lock if it's lost
        const handleRelease = () => {
          setIsWakeLockActive(false);
          setWakeLock(null);
        };
        lock.addEventListener('release', handleRelease);

        // Cleanup event listener when lock is released
        return () => lock.removeEventListener('release', handleRelease);
      } catch (error) {
        console.error('Failed to acquire wake lock:', error);
      }
    } else {
      console.warn('Wake Lock API is not supported on this browser.');
    }
  }, []);

  const releaseWakeLock = useCallback(() => {
    if (wakeLock) {
      void wakeLock.release().then(() => {
        setWakeLock(null);
        setIsWakeLockActive(false);
      });
    }
  }, [wakeLock]);

  const toggleWakeLock = useCallback(() => {
    if (isWakeLockActive) {
      releaseWakeLock();
    } else {
      void requestWakeLock();
    }
  }, [isWakeLockActive, requestWakeLock, releaseWakeLock]);

  useEffect(() => {
    // Clean up wake lock on component unmount
    return () => {
      if (wakeLock) {
        void wakeLock.release();
      }
    };
  }, [wakeLock]);

  return { isWakeLockActive, toggleWakeLock };
};
