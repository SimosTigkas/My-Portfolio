import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I specialize in building responsive, accessible and performance-driven web applications using React, JavaScript and modern CSS. I focus on creating seamless user experiences across all devices.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Software Developer</h3>
                        <p>I enjoy solving complex problems and continuously learning new technologies. My goal is to write clean, efficient and scalable code that not only works well but also enhances usability and long-term maintainability.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I design intuitive user interfaces and engaging digital experiences. From creating landing pages to building consistent design systems, I strive to balance creativity with usability, ensuring every design choice supports the user journey.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>);
};