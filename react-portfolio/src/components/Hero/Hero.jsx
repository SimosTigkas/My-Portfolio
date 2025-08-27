import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import CV from "../../file/hero/CV.pdf";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Simos!!</h1>
            <p className={styles.description}>A frontend developer with a passion for UI/UX design. I love turning ideas into interactive experiences and I’m excited to bring that creativity to my next project.</p>
            <a href={CV} className={styles.resumeBtn} download>Download CV</a>
            <a href="#contact" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
};