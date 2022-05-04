type SettingListener<T> = (setting: T) => void;
type SettingUnlisten = () => void;

export type ColorTheme = "light" | "dark";
export type ColorThemeSetting = "inherit" | ColorTheme;
export type ReducedMotion = boolean;
export type ReducedMotionSetting = "inherit" | ReducedMotion;

export class SettingsManager {
  static readonly DEFAULT_COLOR_THEME: ColorThemeSetting = "inherit";
  static readonly DEFAULT_REDUCED_MOTION: ReducedMotionSetting = "inherit";
  static readonly COLOR_THEME_STORAGE_KEY = "setting.color-theme";
  static readonly REDUCED_MOTION_STORAGE_KEY = "setting.reduced-motion";

  get currentColorThemeValue(): ColorTheme {
    return this.getColorThemeValue(this._colorTheme);
  }
  get currentColorTheme(): ColorThemeSetting {
    return this._colorTheme;
  }

  get currentReducedMotionValue(): ReducedMotion {
    return this.getReducedMotionValue(this._reducedMotion);
  }
  get currentReducedMotion(): ReducedMotionSetting {
    return this._reducedMotion;
  }

  private _colorTheme: ColorThemeSetting = SettingsManager.DEFAULT_COLOR_THEME;
  private colorThemeListeners: SettingListener<ColorTheme>[] = [];

  private _reducedMotion: ReducedMotionSetting =
    SettingsManager.DEFAULT_REDUCED_MOTION;
  private reducedMotionListeners: SettingListener<ReducedMotion>[] = [];

  constructor(protected readonly storage: Storage) {
    const savedColorThemePreference = storage.getItem(
      SettingsManager.COLOR_THEME_STORAGE_KEY
    ) as ColorThemeSetting | null;
    const savedReducedMotionPreference = storage.getItem(
      SettingsManager.REDUCED_MOTION_STORAGE_KEY
    ) as ReducedMotionSetting | null;

    this._colorTheme =
      savedColorThemePreference ?? SettingsManager.DEFAULT_COLOR_THEME;
    this._reducedMotion =
      savedReducedMotionPreference === null
        ? SettingsManager.DEFAULT_REDUCED_MOTION
        : savedReducedMotionPreference;

    // setup inherit listeners for when color scheme is changed
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (this._colorTheme !== "inherit") {
          return;
        }

        const colorTheme: ColorTheme = e.matches ? "dark" : "light";
        this.updateListeners(this.colorThemeListeners, colorTheme);
      });

    // setup inherit listeners for when reduced motion is changed
    window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .addEventListener("change", (e) => {
        if (this._reducedMotion !== "inherit") {
          return;
        }

        const reducedMotion: ReducedMotion = e.matches;
        this.updateListeners(this.reducedMotionListeners, reducedMotion);
      });
  }

  setColorTheme(colorThemeSetting: ColorThemeSetting): void {
    this._colorTheme = colorThemeSetting;

    this.storage.setItem(
      SettingsManager.COLOR_THEME_STORAGE_KEY,
      colorThemeSetting
    );

    const colorTheme = this.getColorThemeValue(colorThemeSetting);
    this.updateListeners(this.colorThemeListeners, colorTheme);
  }

  setReducedMotion(reducedMotionSetting: ReducedMotionSetting): void {
    this._reducedMotion = reducedMotionSetting;

    this.storage.setItem(
      SettingsManager.REDUCED_MOTION_STORAGE_KEY,
      reducedMotionSetting.toString()
    );

    const reducedMotion = this.getReducedMotionValue(reducedMotionSetting);
    this.updateListeners(this.reducedMotionListeners, reducedMotion);
  }

  addColorThemeListener(
    listener: SettingListener<ColorTheme>
  ): SettingUnlisten {
    this.colorThemeListeners.push(listener);
    return this.generateRemoveListenerCallback(
      this.colorThemeListeners,
      listener
    );
  }

  addReducedMotionListener(
    listener: SettingListener<ReducedMotion>
  ): SettingUnlisten {
    this.reducedMotionListeners.push(listener);
    return this.generateRemoveListenerCallback(
      this.reducedMotionListeners,
      listener
    );
  }

  private getColorThemeValue(colorThemeSetting: ColorThemeSetting): ColorTheme {
    let colorTheme = colorThemeSetting;

    if (colorTheme === "inherit") {
      colorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    return colorTheme;
  }

  private getReducedMotionValue(
    reducedMotionSetting: ReducedMotionSetting
  ): ReducedMotion {
    let reducedMotion = reducedMotionSetting;

    if (reducedMotion === "inherit") {
      reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }

    return reducedMotion;
  }

  private updateListeners<Listeners extends ((value: Value) => void)[], Value>(
    listeners: Listeners,
    value: Value
  ) {
    for (const listener of listeners) {
      listener(value);
    }
  }

  private generateRemoveListenerCallback<T>(
    listeners: SettingListener<T>[],
    listenerToRemove: SettingListener<T>
  ): SettingUnlisten {
    return () => {
      const index = listeners.indexOf(listenerToRemove);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }
}
