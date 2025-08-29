import React from "react";
import styles from "./Contact.module.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!!</p>
        </div>
        <ul className={styles.links}>
            <li>
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=simostigkas@gmail.com"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <MdOutlineMail/>
                </a>
            </li>
            <li>
                <a
                href="https://www.linkedin.com/in/simos-tigkas/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <AiOutlineLinkedin/>
                </a>
            </li>
            <li>
                <a
                href="https://www.github.com/SimosTigkas"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <VscGithub/>
                </a>
            </li>
        </ul>
    </footer>
    )
};