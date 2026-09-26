import {
  faTwitch,
  faYoutube,
  faBluesky,
  faGithub,
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
    href: '/commands',
    label: 'Commands',
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
    command: 'commands',
    description: 'Gives a link to this very page.',
  },
  {
    command: ['bomb', 'unbomb'],
    description: '💣💥',
  },
  {
    command: ['bonk', 'unbonk'],
    description: 'BONK',
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
    command: ['hug', 'unhug'],
    description: 'Give someone a hug! 💕',
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
    command: 'polymorph',
    description: 'A wizard casts a spell! What will you be turned into..? 🧙‍♂️ (once per day)',
    url: '/polymorph',
  },
  {
    command: 'pushups',
    description: 'Tells you how many total pushups I owe from killing pikmin',
  },
  {
    command: 'quote',
    description:
      'Fetch a quote! If empty, then gets a random quote. If text is provided, it will get the first quote that matches. If a number is provided, it gets the quote by id.',
    url: '/quotes',
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
    description: 'Only can be used by saramickle19 (once per day)',
    url: '/smut',
  },
  {
    command: ['tempc', 'tempf'],
    description: 'Convert temperature. !tempc for C -> F, !tempf for F -> C',
  },
  {
    command: 'treat',
    description: 'Get a daily treat from the bakery! 🧁',
    url: '/treats',
  },
  {
    command: ['tuck', 'untuck'],
    description: 'Tuck someone into bed! 🛏️',
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

export const SUB_COMMANDS = [
  {
    command: 'addcurrency',
    description:
      'Add a new currency to the list. Must be be a full sentence with the user and amount referenced. Example: "!addcurrency %user% has %currency_count% rings. Don\'t get hit."',
    url: '/daily-currency',
  },
  {
    command: 'addpolymorph',
    description:
      'Add a new polymorph to the list. Must complete the sentence "You\'ve been polymorphed into ___". Example: "!addpolymorph a lesser wizard"',
    url: '/polymorph',
  },
  {
    command: 'addquote',
    description: 'Create a new quote',
    url: '/quotes',
  },
  {
    command: 'addsmut',
    description: 'Add to the library of smut',
    url: '/smut',
  },
  {
    command: 'addtreat',
    description: 'Add a new treat for the bakery to serve!',
    url: '/treats',
  },
  {
    command: 'timer',
    description: 'Create a new timer. Usage: "!timer 3m14s Pie timeee"',
  },
  {
    command: 'timers',
    description: 'List all currently running timers',
  },
  {
    command: 'wtf',
    description: 'Add to the count of times Sean has lost his mind',
  },
];

export const VIP_COMMANDS = [
  {
    command: 'hw',
    description: 'Assign the streamer some homework for later.',
  },
  {
    command: 's',
    description: 'Have your message be read as text to speech',
    url: '/tts',
  },
  {
    command: 'seanstopraging',
    description: "I'm sure telling them to calm down will help",
  },
  {
    command: 'setvoice',
    description: "Set your user's default text to speech voice",
    url: '/tts',
  },
  {
    command: 'zoom',
    description: 'Add one to the "zoom" counter, when the streamer zooms in the camera',
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
    command: 'delcurrency',
    description: "Delete a daily currency by it's id",
    url: '/daily-currency',
  },
  {
    command: 'delpolymorph',
    description: "Delete a polymorph by it's id",
    url: '/polymorph',
  },
  {
    command: 'delquote',
    description: "Delete a quote by it's id",
    url: '/quotes',
  },
  {
    command: 'delsmut',
    description: "Delete a smut entry by it's id",
    url: '/smut',
  },
  {
    command: 'deltreat',
    description: "Delete a treat by it's id",
    url: '/treats',
  },
  {
    command: ['focus', 'unfocus'],
    description: 'Toggle "Focus mode", which disables all sound effects and tts messages',
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
    command: 'resetpalette',
    description: 'Resets the palette back to the one set for the category',
  },
  {
    command: 'setgame',
    description: 'Sets the stream category',
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
    command: 'settitle',
    description: 'Sets the stream title',
  },
  {
    command: 'so',
    description: 'Shout someone out!',
  },
  {
    command: 'spoilers',
    description: 'Posts & pins the spoiler warning message',
  },
];

export const CHANNEL_POINT_REDEEMS = [];

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
