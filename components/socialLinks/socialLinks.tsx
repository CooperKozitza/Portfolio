import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import styles from "./socialLinks.module.css"

const SocialLinks = () => (
  <span className="flex pt-3">
    <a className={styles.link} href="https://www.github.com/CooperKozitza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <FaGithub />
    </a>
    <a className={styles.link} href="https://www.instagram.com/cooper.kozitza" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram />
    </a>
    <a className={styles.link} href="" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
      <FaTwitter />
    </a>
  </span>
);

export default SocialLinks;
