import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Simos!!</h1>
            <p className={styles.description}>I'm a Software Developer and I recently completed my studies in Hive. Reach out if you'd like to learn more.</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=simostigkas@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
};