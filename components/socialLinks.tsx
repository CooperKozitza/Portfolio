import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => (
  <span className="flex pt-3">
    <a className="transition rounded-md hover:bg-white hover:text-neutral-800 text-white p-2 mr-3" href="https://www.github.com/CooperKozitza" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a className="transition rounded-md hover:bg-white hover:text-neutral-800 text-white p-2 mr-3" href="https://www.instagram.com/cooper.kozitza" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a className="transition rounded-md hover:bg-white hover:text-neutral-800 text-white p-2 mr-3" href="#" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
  </span>
);

export default SocialLinks;
