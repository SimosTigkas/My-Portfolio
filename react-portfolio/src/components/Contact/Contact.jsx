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
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <MdOutlineMail />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=simostigkas@gmail.com" target="_blank" rel="noopener noreferrer">simostigkas@gmail.com</a>
            </li>
            <li className={styles.link}>
                <AiOutlineLinkedin />
                <a href="https://www.linkedin.com/in/simos-tigkas/">linkedin.com/in/simos-tigkas/</a>
            </li>
            <li className={styles.link}>
                <VscGithub />
                <a href="https://www.github.com/SimosTigkas">github.com/SimosTigkas</a>
            </li>
        </ul>
    </footer>);
};