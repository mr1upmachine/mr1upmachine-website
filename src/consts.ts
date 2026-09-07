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
    href: '/chat-commands',
    label: 'Chat Commands',
  },
  {
    href: '/tts',
    label: 'TTS',
  },
];

export const MOD_COMMANDS = [
  {
    command: 'adsnooze',
    description: 'snoozes the ads for 3 minutes',
  },
  {
    command: 'canceltimer',
    description: 'Cancels an in progress timer by id',
  },
  {
    command: 'canceltimers',
    description: 'Cancels all in progress timers',
  },
  {
    command: 'cggauto',
    description: 'toggle auto play for Chat Guess Games',
  },
  {
    command: ['focus', 'unfocus'],
    description: 'Toggle "Focus mode", which disables all sound effects and tts messages',
  },
  {
    command: 'homework',
    description: 'Assign the streamer some homework for later.',
  },
  {
    command: 'musicprev',
    description: 'Plays the previous song. Music must already be playing.',
  },
  {
    command: 'musicskip',
    description: 'Skips the current song. Music must already be playing.',
  },
  {
    command: 'musicstart',
    description: 'Starts the music and shows the overlay',
  },
  {
    command: 'musicstop',
    description: 'Stops the music and hides the overlay',
  },
  {
    command: 'musictoggle',
    description: 'Shows / hides the music overlay',
  },
  {
    command: 'raid',
    description:
      "Posts the raid messages. Shouldn't be necessary since they automatically post when raid is started",
  },
  {
    command: 'setgamepalette',
    description: 'Takes the current palette and makes it the default for this category on twitch',
  },
  {
    command: 'setpalette',
    description:
      'Free version of the Palette Swap redeem. Input a list of hex color codes and it will change the background colors.',
  },
  {
    command: 'so',
    description: 'Shout someone out!',
  },
  {
    command: 'quotedel',
    description: "Delete a quote by it's id",
  },
];

export const VIP_COMMANDS = [
  {
    command: 's',
    description: 'Have your message be read as text to speech',
  },
  {
    command: 'seanstopraging',
    description: "I'm sure telling them to calm down will help",
  },
  {
    command: 'setvoice',
    description: "Set your user's default text to speech voice",
  },
  {
    command: 'quoteadd',
    description: 'Create a new quote',
  },
  {
    command: 'smutadd',
    description: 'Add to the library of smut',
  },
  {
    command: 'zoom',
    description: 'Add one to the "zoom" counter, when the streamer zooms in the camera',
  },
];

export const SUB_COMMANDS = [
  {
    command: 'quoteadd',
    description: 'Create a new quote',
  },
  {
    command: 'timer',
    description: 'Create a new timer. Usage: "!timer 3m14s Pie timeee"',
  },
  {
    command: 'timers',
    description: 'List all currently running timers',
  },
];

export const ALL_COMMANDS = [
  {
    command: '8ball',
    description: 'Get an answer to a yes or no question',
  },
  {
    command: 'banana',
    description: 'OOOOOOHHH BANANA',
  },
  {
    command: 'bee',
    description: '🐝',
  },
  {
    command: ['bomb', 'unbomb'],
    description: '💣💥',
  },
  {
    command: 'discord',
    description: 'Gets a link to the discord',
  },
  {
    command: 'duck',
    description: '🦆',
  },
  {
    command: ['e', 'eee...'],
    description: 'eeeeeee',
  },
  {
    command: 'flip',
    description: 'uʍop ǝpᴉsdn ʇxǝʇ ǝɯos uɹnʇ',
  },
  {
    command: ['freerouge', 'cxrougeKnife'],
    description: "we don't talk about what happened...",
  },
  {
    command: 'hot',
    description: 'Tell the streamer something hot is on screen',
  },
  {
    command: ['livemas', 'livemenos'],
    description: 'Taco Bell dong',
  },
  {
    command: ['lurk', 'unlurk'],
    description:
      'Indicate whether you are leaving or re-entering chat. Never necessary, but always appreciated',
  },
  {
    command: 'math',
    description: 'oh no, a math',
  },
  {
    command: 'plot',
    description: 'oh no, a plot',
  },
  {
    command: 'quote',
    description:
      'Fetch a quote! If empty, then gets a random quote. If text is provided, it will get the first quote that matches. If a number is provided, it gets the quote by id.',
  },
  {
    command: 'rat',
    description: 'on no, a rat',
  },
  {
    command: 'roulette',
    description: '50/50 chance you get timed out, with no benefit',
  },
  {
    command: 'smut',
    description: 'Only can be used by saramickle19',
  },
  {
    command: 'videogames',
    description: 'Who wants to play video games~?',
  },
  {
    command: 'wallet',
    description: 'See how much daily currency you have!',
  },
];

export const TTS_VOICE_SRC_PATTERN = '/tts-demo-{voice}.wav';
type TtsVoice = string | [string, string];
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
