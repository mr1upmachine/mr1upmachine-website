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
// image: file in public/totk-icons; icon: FontAwesome fallback when there's no image.
export const TYPE_STYLES: Record<string, { icon: IconDefinition; color: string; image?: string }> =
  {
    photo: { icon: faCamera, color: '#65a30d', image: '/totk-icons/photo.png' },
    shrine: { icon: faVihara, color: '#0284c7', image: '/totk-icons/shrine.png' },
    lightroot: { icon: faSeedling, color: '#ca8a04', image: '/totk-icons/lightroot.png' },
    cave: { icon: faMountain, color: '#92400e', image: '/totk-icons/cave.png' },
    well: { icon: faBucket, color: '#475569', image: '/totk-icons/well.png' },
    armor: { icon: faShieldHalved, color: '#7e22ce', image: '/totk-icons/armor.png' },
    recipe: { icon: faUtensils, color: '#ea580c', image: '/totk-icons/recipe.png' },
  };

export const DEFAULT_STYLE: { icon: IconDefinition; color: string; image?: string } = {
  icon: faCircle,
  color: '#0f766e',
};

export const typeStyle = (type: string) => TYPE_STYLES[type] ?? DEFAULT_STYLE;
