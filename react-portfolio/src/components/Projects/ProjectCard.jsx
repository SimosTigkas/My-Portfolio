// import React, { useState } from 'react';
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
    // const [showVideo, setShowVideo] = useState(false);
    const handleRedirect = () => {
        window.open(project.source, "_blank");
    };

    return (
        <div className={styles.container} onClick={handleRedirect} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleRedirect()}>
            <img src={getImageUrl(project.imageSrc)} alt={`image of ${project.title}`} className={styles.image}/>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.skills}>
                {project.skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            {/* <div className={styles.links}>
                <button className={styles.link} onClick={(e) => {e.stopPropagation(); setShowVideo(true);}}> Demo </button>
            </div>
            {showVideo && (
                <div className={styles.videoOverlay}>
                    <div className={styles.videoContainer}>
                        <video controls autoPlay onEnded={() => setShowVideo(false)}>
                            <source src={project.demo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className={styles.closeBtn} onClick={() => setShowVideo(false)}>
                            ✖
                        </button>
                    </div>
                </div>
            )} */}
        </div>
    );
};
