import React from "react";
import styles from "./Contact.module.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";


export const Contact = () => {
    const handleClick = () => {
        window.open("https://www.github.com/SimosTigkas");
    };
    return (
        <footer id="contact" className={styles.container} onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleClick()} style={{ cursor: "pointer" }}>
        <div className={styles.text}>
            <h2>Let's connect</h2>
            <p>Feel free to reach out!!</p>
        </div>
        <ul className={styles.links}>
            <li>
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=simostigkas@gmail.com"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
                >
                    <AiOutlineLinkedin/>
                </a>
            </li>
            <li>
                <a
                href="https://wa.me/358408558842"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                >
                    <FaWhatsapp />
                </a>
            </li>
        </ul>
    </footer>
    )
};