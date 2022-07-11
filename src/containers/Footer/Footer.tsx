import {
  faGear,
  faMug,
  IconDefinition,
} from "@fortawesome/pro-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";
import LinkAnchor from "../../components/LinkAnchor/LinkAnchor";
import Divider from "../../components/Divider/Divider";

interface LinkMeta {
  readonly key: string;
  readonly display: string;
  readonly to: string;
  readonly external?: boolean;
  readonly icon: IconDefinition;
}

const LINK_GROUPS: readonly LinkMeta[][] = [
  [
    {
      key: "twitter",
      display: "Twitter",
      to: "https://twitter.com/Mr1upMachine",
      external: true,
      icon: faTwitter,
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
  ],
  [
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
      to: "https://www.youtube.com/channel/UCFWnb9VKCyNwXICmn1tlk6A",
      external: true,
      icon: faYoutube,
    },
    {
      key: "kofi",
      display: "Kofi",
      to: "https://ko-fi.com/mr1upmachine",
      external: true,
      icon: faMug,
    },
    {
      key: "settings",
      display: "Settings",
      to: "/settings",
      icon: faGear,
    },
  ],
];

const LINK_ELEMENTS: readonly JSX.Element[] = LINK_GROUPS.map(
  (linkGroup, i, { length: linkGroupLength }) => (
    <span className="footer-link-group" key={"link-group-" + i}>
      {linkGroup.map((link, j, { length }) => {
        let dividerElementClass = "footer-link-divider";
        if (length - 1 === j) {
          dividerElementClass += " footer-link-group-divider";
          if (linkGroupLength - 1 === i) {
            dividerElementClass += " footer-link-last-divider";
          }
        }

        return (
          <span className="footer-link" key={link.key}>
            <LinkAnchor
              className="footer-link-anchor"
              color="light"
              external={link.external}
              to={link.to}
            >
              <FontAwesomeIcon
                className="footer-link-img"
                icon={link.icon}
                aria-hidden="true"
              />
              {link.display}
            </LinkAnchor>
            <Divider className={dividerElementClass} />
          </span>
        );
      })}
    </span>
  )
);

function Footer() {
  return (
    <footer className="footer-root">
      <nav className="footer-nav">{LINK_ELEMENTS}</nav>
    </footer>
  );
}

export default Footer;
