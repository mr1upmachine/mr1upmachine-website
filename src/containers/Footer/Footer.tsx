import { SvgIconComponent } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import classnames from 'classnames';
import { FC, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IconButton } from '../../components/IconButton/IconButton';
import { LinkIconButton } from '../../components/LinkIconButton/LinkIconButton';
import { SettingsDialog } from '../SettingsDialog/SettingsDialog';

interface IconProps {
  'aria-hidden': boolean | 'true' | 'false';
  className: string;
}

interface LinkMeta {
  readonly key: string;
  readonly display: string;
  readonly to: string;
  readonly external?: boolean;
  readonly icon: ((props: IconProps) => JSX.Element) | SvgIconComponent;
}

const DiscordIcon = (props: { 'aria-hidden': boolean | 'true' | 'false'; className: string }) => {
  return (
    <svg
      aria-hidden={props['aria-hidden']}
      className={props.className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <title>Discord</title>
      <path
        fill="currentColor"
        d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
      />
    </svg>
  );
};

const TwitchIcon = (props: { 'aria-hidden': boolean | 'true' | 'false'; className: string }) => {
  return (
    <svg
      aria-hidden={props['aria-hidden']}
      className={props.className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <title>Twitch</title>
      <path
        fill="currentColor"
        d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"
      />
    </svg>
  );
};

const LINK_GROUPS: readonly LinkMeta[] = [
  {
    key: 'discord',
    display: 'Discord',
    to: 'https://discord.com/users/251015921596891137',
    external: true,
    icon: DiscordIcon,
  },
  {
    key: 'twitter',
    display: 'Twitter',
    to: 'https://twitter.com/Mr1upMachine',
    external: true,
    icon: TwitterIcon,
  },
  {
    key: 'instagram',
    display: 'Instagram',
    to: 'https://www.instagram.com/mr1upmachine/',
    external: true,
    icon: InstagramIcon,
  },
  {
    key: 'twitch',
    display: 'Twitch',
    to: 'https://www.twitch.tv/mr1upmachine',
    external: true,
    icon: TwitchIcon,
  },
  {
    key: 'youtube',
    display: 'YouTube',
    to: 'https://www.youtube.com/@Mr1upMachine',
    external: true,
    icon: YouTubeIcon,
  },
  {
    key: 'github',
    display: 'GitHub',
    to: 'https://github.com/Mr1upMachine',
    external: true,
    icon: GitHubIcon,
  },
  {
    key: 'linkedin',
    display: 'LinkedIn',
    to: 'https://www.linkedin.com/in/sean--hale/',
    external: true,
    icon: LinkedInIcon,
  },
];

const Footer: FC = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { pathname } = useLocation();

  const parsedLinkGroups = useMemo(
    () =>
      LINK_GROUPS.map(({ external, key, display, to, icon: IconTag }) => (
        <LinkIconButton external={external} key={key} title={display} to={to}>
          <IconTag aria-hidden="true" className="tw-h-6 tw-w-6" />
        </LinkIconButton>
      )),
    []
  );

  const homeButtonClassNames = classnames({
    'tw-invisible': pathname === '/',
  });

  return (
    <footer className="tw-shrink-0 tw-grow-0">
      <nav className="tw-flex tw-justify-between tw-gap-2 tw-bg-2 tw-px-2 tw-py-1 tw-text-white">
        <LinkIconButton aria-label="Home page" className={homeButtonClassNames} to="/">
          <HomeIcon aria-hidden="true" className="tw-h-6 tw-w-6" />
        </LinkIconButton>
        <div className="tw-flex tw-gap-2 sm:tw-gap-3">{parsedLinkGroups}</div>
        <IconButton aria-label="Open settings dialog" onClick={() => setShowSettings(true)}>
          <SettingsIcon aria-hidden="true" className="tw-h-6 tw-w-6" />
        </IconButton>
      </nav>
      <SettingsDialog
        open={showSettings}
        onClose={() => {
          setShowSettings(false);
        }}
      />
    </footer>
  );
};

export default Footer;
