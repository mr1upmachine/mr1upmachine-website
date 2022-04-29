import "./Footer.css";
import BMCLogo from "../../assets/bmc-logo-white.svg";
import GitHubLogo from "../../assets/github-logo-white.svg";
import TwitchLogo from "../../assets/twitch-logo-white.svg";
import TwitterLogo from "../../assets/twitter-logo-white.svg";
import YouTubeLogo from "../../assets/youtube-logo-white.svg";

interface LinkMeta {
  readonly key: string;
  readonly display: string;
  readonly url: string;
  readonly logo: string;
}

const linkGroups: readonly LinkMeta[][] = [
  [
    {
      key: "twitter",
      display: "Twitter",
      url: "https://twitter.com/Mr1upMachine",
      logo: TwitterLogo,
    },
    {
      key: "github",
      display: "GitHub",
      url: "https://github.com/Mr1upMachine",
      logo: GitHubLogo,
    },
    {
      key: "youtube",
      display: "YouTube",
      url: "https://www.youtube.com/channel/UCFWnb9VKCyNwXICmn1tlk6A",
      logo: YouTubeLogo,
    },
  ],
  [
    {
      key: "twitch",
      display: "Twitch",
      url: "https://www.twitch.tv/mr1upmachine",
      logo: TwitchLogo,
    },
    {
      key: "bmc",
      display: "Buy me a coffee",
      url: "https://www.buymeacoffee.com/mr1upmachine",
      logo: BMCLogo,
    },
  ],
];

function Footer() {
  const linkElements: readonly JSX.Element[] = linkGroups
    .map((linkGroup, i, { length: linkGroupLength }) => (
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
              <a className="footer-link-anchor" href={link.url}>
                <img
                  className="footer-link-img"
                  src={link.logo}
                  alt=""
                  aria-hidden="true"
                ></img>
                {link.display}
              </a>
              <span className={dividerElementClass} aria-hidden="true"></span>
            </span>
          );
        })}
      </span>
    ))
    .flat(1);
  return (
    <footer className="footer-root">
      <nav className="footer-nav">{linkElements}</nav>
    </footer>
  );
}

export default Footer;
