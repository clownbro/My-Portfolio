import styles from "./headinglinks.module.scss";
import { FaOrcid, FaGithub, FaResearchgate, FaMedium, FaLinkedin, FaInstagram, FaBlog } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://orcid.org/0009-0004-7787-1573" target="_blank" rel="nofollow">
          <FaOrcid size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://www.github.com/Anup-commits" target="_blank" rel="nofollow">
          <FaGithub size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://www.researchgate.net/profile/Anup-Paudel-3" target="_blank" rel="nofollow">
        <FaResearchgate size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://medium.com/@anup-paudel1995" target="_blank" rel="nofollow">
          <FaMedium size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://www.linkedin.com/in/paudelanup/" target="_blank" rel="nofollow">
          <FaLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="" target="_blank" rel="nofollow">
          <FaInstagram size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://anuppaud.com" target="_blank" rel="nofollow">
          <FaBlog size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};
