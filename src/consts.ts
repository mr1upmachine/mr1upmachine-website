import {
  faTwitch,
  faYoutube,
  faBluesky,
  faGithub,
  faLinkedin,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const SITE_TITLE = "mr1upmachine's website";
export const SITE_DESCRIPTION = 'A simple website used by mr1upmachine to do some dumb stuff';
export const SOCIALS = [
  {
    icon: faTwitch,
    brandColor: '#8956FB',
    srText: 'Follow me on Twitch',
    url: 'https://www.twitch.tv/mr1upmachine',
  },
  {
    icon: faYoutube,
    brandColor: '#FF0000',
    srText: 'Follow me on YouTube',
    url: 'https://www.youtube.com/@mr1upmachineLive',
  },
  {
    icon: faBluesky,
    brandColor: '#0085ff',
    srText: 'Follow me on Bluesky',
    url: 'https://bsky.app/profile/mr1upmachine.com',
  },
  {
    icon: faGithub,
    brandColor: '#777777',
    srText: "See what I've built on Github",
    url: 'https://github.com/Mr1upMachine',
  },
  {
    icon: faLinkedin,
    brandColor: '#0a66c2',
    srText: 'Check out my professional profile on LinkedIn',
    url: 'https://www.linkedin.com/in/sean--hale/',
  },
  {
    icon: faDiscord,
    brandColor: '#5865F2',
    srText: 'Shoot me a message on Discord',
    url: 'https://discord.com/users/251015921596891137',
  },
  {
    icon: faEnvelope,
    brandColor: '#00FF00',
    srText: 'Shoot me an email',
    url: 'mailto:sean@mr1upmachine.com',
  },
];

export const HEADER_LINKS = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/recipes',
    label: 'Recipes',
  },
  {
    href: '/tts',
    label: 'TTS',
  },
];

export const TTS_VOICE_SRC_PATTERN = '/tts-demo-{voice}.wav';
type TtsVoice = string | string[];
export const TTS_VOICES: TtsVoice[] = [
  'amy',
  'announcer',
  'brian',
  ['david', 'default'],
  'emma',
  'glados',
  'narrator',
  'parable',
  'russell',
  'salli',
  'shadow',
  'spongebob',
  'witch',
];
