export type Part = { type: 'text'; value: string } | { type: 'mention'; value: string };

export const twitchUrl = (username: string) => `https://www.twitch.tv/${username.toLowerCase()}`;

export const formatDateTime = (iso: string, timeZone?: string) =>
  new Date(iso)
    .toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hourCycle: 'h23',
      timeZone,
    })
    .replace(/,/g, '');

const mentionPattern = /(@[A-Za-z0-9_]{1,25})/;

export const parseText = (text: string): Part[] =>
  text
    .split(mentionPattern)
    .filter((segment) => segment.length > 0)
    .map((segment) =>
      mentionPattern.test(segment)
        ? { type: 'mention', value: segment.slice(1) }
        : { type: 'text', value: segment }
    );
