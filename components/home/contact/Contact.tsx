import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <ToastContainer />
      <section className="section-wrapper" id="contact">
        <div className={styles.contactWrapper}>
          <Reveal width="100%">
            <h4 className={styles.contactTitle}>
              Contact<span>.</span>
            </h4>
          </Reveal>
          <Reveal width="100%">
            <p className={styles.contactCopy}>
              <span style={{ paddingRight: 5 }}>
                Shoot me an email if you want to connect! You can also find me
                on
              </span>
              <Link
                href="https://medium.com/@neupane.krishna33"
                target="_blank"
                rel="nofollow"
              >
                Medium
              </Link>{" "}
              or{" "}
              <Link
                style={{ paddingRight: 5 }}
                href="https://www.linkedin.com/in/krishna-neupane-50082091/"
                target="_blank"
                rel="nofollow"
              >
                Linkedin
              </Link>
              or {""}
              <Link
                href="https://www.instagram.com/makeajourneywithkrishna/"
                target="_blank"
                rel="nofollow"
              >
                Instagram
              </Link>
            </p>
          </Reveal>
          <Reveal width="100%">
            <Link href="mailto:neupane.krishna33@gmail.com">
              <div className={styles.contactEmail}>
                <AiFillMail size="2.4rem" />
                <span>neupane.krishna33@gmail.com</span>
              </div>
            </Link>
          </Reveal>
          <div style={{ marginTop: "4rem" }}>
            <Reveal width="100%">
              <div className={styles.contactPhone}>
                <FaPhoneAlt size="2rem" />
                <span>+977-9847263316</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};
