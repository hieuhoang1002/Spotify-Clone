import styles from "./styles.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const footerIcons = [<InstagramIcon />, <TwitterIcon />, <FacebookIcon />];

const footerLinks = [
  "legal",
  "privacy center",
  "privacy policy",
  "Cookies",
  "About ads",
  "Additional CA Privacy Disclosures",
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.footer_links}>
          <div className={styles.footer_links_2}>
            {footerLinks.map((link, index) => (
              <div className={styles.links} key={index}>
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.footer_icons}>
          {footerIcons.map((icon, index) => (
            <div className={styles.icon} key={index}>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
