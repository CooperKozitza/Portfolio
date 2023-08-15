import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import styles from "./socialLinks.module.css"

const SocialLinks = () => (
  <span className="flex pt-3">
    <a className={styles.link} href="https://www.github.com/CooperKozitza" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a className={styles.link} href="https://www.instagram.com/cooper.kozitza" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a className={styles.link} href="#" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
  </span>
);

export default SocialLinks;
