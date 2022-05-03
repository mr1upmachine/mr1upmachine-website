import {
  faCupTogo,
  faGear,
  IconDefinition,
} from "@fortawesome/pro-regular-svg-icons";
import {
  faGithub,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./Footer.css";

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
      key: "youtube",
      display: "YouTube",
      to: "https://www.youtube.com/channel/UCFWnb9VKCyNwXICmn1tlk6A",
      external: true,
      icon: faYoutube,
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
      key: "bmc",
      display: "Buy me a coffee",
      to: "https://www.buymeacoffee.com/mr1upmachine",
      external: true,
      icon: faCupTogo,
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

        const linkContentJSX = (
          <>
            <FontAwesomeIcon
              className="footer-link-img"
              icon={link.icon}
              aria-hidden="true"
            />
            {link.display}
          </>
        );

        const linkJSX = link.external ? (
          <a className="footer-link-anchor" href={link.to}>
            {linkContentJSX}
          </a>
        ) : (
          <Link className="footer-link-anchor" to={link.to}>
            {linkContentJSX}
          </Link>
        );

        return (
          <span className="footer-link" key={link.key}>
            {linkJSX}
            <span className={dividerElementClass} aria-hidden="true"></span>
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
