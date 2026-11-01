import mapIds from '../data/totk-map-ids.json';
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
// image: file in public/totk-icons (invert: flip white icons to dark for the white cards);
// icon: FontAwesome fallback when there's no image.
type TypeStyle = { icon: IconDefinition; color: string; image?: string; invert?: boolean };

export const TYPE_STYLES: Record<string, TypeStyle> = {
  photo: { icon: faCamera, color: '#65a30d', image: '/totk-icons/photo.png' },
  shrine: { icon: faVihara, color: '#0284c7', image: '/totk-icons/shrine.png' },
  lightroot: { icon: faSeedling, color: '#ca8a04', image: '/totk-icons/lightroot.png' },
  cave: { icon: faMountain, color: '#92400e', image: '/totk-icons/cave.png' },
  well: { icon: faBucket, color: '#475569', image: '/totk-icons/well.png' },
  armor: { icon: faShieldHalved, color: '#7e22ce', image: '/totk-icons/armor.png', invert: true },
  recipe: { icon: faUtensils, color: '#ea580c', image: '/totk-icons/recipe.png', invert: true },
};

export const DEFAULT_STYLE: TypeStyle = {
  icon: faCircle,
  color: '#0f766e',
};

export const typeStyle = (type: string) => TYPE_STYLES[type] ?? DEFAULT_STYLE;

// Object map layer to search for each type. Types left out have nothing placed on the map
// (armor sits in chests, recipes are cooked), so they only get a wiki link.
const MAP_LAYERS: Record<string, 'Surface' | 'Depths'> = {
  photo: 'Surface',
  shrine: 'Surface',
  lightroot: 'Depths',
  cave: 'Surface',
  well: 'Surface',
};

// "Traveler's Sword (Pristine)" -> "Traveler's Sword"
const baseName = (text: string) => text.replace(/\s*\(Pristine\)$/i, '');

export const wikiUrl = (text: string) =>
  `https://www.zeldadungeon.net/wiki/Special:Search?search=${encodeURIComponent(baseName(text))}&go=Go`;

type MapId = { hashId: string; mapType: string; mapName: string; x: number; z: number };
// Location markers found by scripts/totk-map-ids.mjs, keyed by bounty id
const MAP_IDS = mapIds as Record<string, MapId>;

const MAP_BASE = 'https://objmap-totk.zeldamods.org/#/map';

// Links to the item's own marker when we know it (opens it selected), otherwise a name search
export const mapUrl = (type: string, text: string, id?: number) => {
  const layer = MAP_LAYERS[type];
  if (!layer) return undefined;

  const known = id !== undefined ? MAP_IDS[id] : undefined;
  if (known) {
    const objId = [known.mapType, known.mapName, known.hashId].join(',');
    return `${MAP_BASE}/z6,${known.x},${known.z},${layer}?id=${encodeURIComponent(objId)}`;
  }

  // Lightroots are found by their name alone ("Gadohsi"), everything else by the full name
  const query = type === 'lightroot' ? text.replace(/\s+Lightroot$/i, '') : baseName(text);
  return `${MAP_BASE}/z3,0,0,${layer}?q=${encodeURIComponent(query)}`;
};
