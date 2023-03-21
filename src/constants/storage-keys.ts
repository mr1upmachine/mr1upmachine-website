export const STORAGE_KEYS = Object.freeze({
  audioMute: (key: string) => `audio.${key}.mute`,
  audioVolume: (key: string) => `audio.${key}.volume`,
  colorTheme: 'setting.color-theme',
  reducedMotion: 'setting.reduced-motion',
});
