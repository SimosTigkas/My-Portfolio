import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=simostigkas@gmail.com" target="_blank" rel="noopener noreferrer">simostigkas@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/simos-tigkas/">linkedin.com/in/simos-tigkas/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                <a href="https://www.github.com/SimosTigkas">github.com/SimosTigkas</a>
            </li>
        </ul>
    </footer>);
};