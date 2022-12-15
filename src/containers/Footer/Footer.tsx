import { IconDefinition } from "@fortawesome/pro-regular-svg-icons";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";
import LinkAnchor from "../../components/LinkAnchor/LinkAnchor";

interface LinkMeta {
  readonly key: string;
  readonly display: string;
  readonly to: string;
  readonly external?: boolean;
  readonly icon: IconDefinition;
}

const LINK_GROUPS: readonly LinkMeta[] = [
  {
    key: "discord",
    display: "Discord",
    to: "https://discord.com/users/251015921596891137",
    external: true,
    icon: faDiscord,
  },
  {
    key: "twitter",
    display: "Twitter",
    to: "https://twitter.com/Mr1upMachine",
    external: true,
    icon: faTwitter,
  },
  {
    key: "instagram",
    display: "Instagram",
    to: "https://www.instagram.com/mr1upmachine/",
    external: true,
    icon: faInstagram,
  },
  {
    key: "twitch",
    display: "Twitch",
    to: "https://www.twitch.tv/mr1upmachine",
    external: true,
    icon: faTwitch,
  },
  {
    key: "youtube",
    display: "YouTube",
    to: "https://www.youtube.com/@Mr1upMachine",
    external: true,
    icon: faYoutube,
  },
  {
    key: "github",
    display: "GitHub",
    to: "https://github.com/Mr1upMachine",
    external: true,
    icon: faGithub,
  },
  {
    key: "linkedin",
    display: "LinkedIn",
    to: "https://www.linkedin.com/in/sean--hale/",
    external: true,
    icon: faLinkedin,
  },
];

function Footer() {
  return (
    <footer className="footer-root">
      <nav className="footer-nav">
        {LINK_GROUPS.map((link) => (
          <LinkAnchor
            className="footer-link-anchor"
            color="light"
            external={link.external}
            key={link.key}
            title={link.display}
            to={link.to}
          >
            <FontAwesomeIcon
              className="footer-link-img"
              icon={link.icon}
              aria-hidden="true"
            />
          </LinkAnchor>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
