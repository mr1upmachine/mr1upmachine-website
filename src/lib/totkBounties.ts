import {
  faCamera,
  faVihara,
  faSeedling,
  faMountain,
  faBucket,
  faShieldHalved,
  faUtensils,
  faCircle,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export type BountyTicket = {
  id: number;
  type: string;
  text: string;
  user: string;
  source: 'chat' | 'roll';
  postedAt: string;
};

export type BountyItem = { id: number; type: string; text: string; done: boolean };

export type BountySnapshot = {
  updatedAt: string;
  types: { type: string; label: string; plural: string }[];
  board: BountyTicket[];
  queue: BountyTicket[];
  items: BountyItem[];
};

// Display style per bounty type. Unknown types fall back to DEFAULT_STYLE.
export const TYPE_STYLES: Record<string, { icon: IconDefinition; color: string }> = {
  photo: { icon: faCamera, color: '#65a30d' },
  shrine: { icon: faVihara, color: '#0284c7' },
  lightroot: { icon: faSeedling, color: '#ca8a04' },
  cave: { icon: faMountain, color: '#92400e' },
  well: { icon: faBucket, color: '#475569' },
  armor: { icon: faShieldHalved, color: '#7e22ce' },
  recipe: { icon: faUtensils, color: '#ea580c' },
};

export const DEFAULT_STYLE = { icon: faCircle, color: '#0f766e' };

export const typeStyle = (type: string) => TYPE_STYLES[type] ?? DEFAULT_STYLE;
