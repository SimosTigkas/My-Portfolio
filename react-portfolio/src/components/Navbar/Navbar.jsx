import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../Navbar/Navbar.module.css';
import {AiOutlineHome} from "react-icons/ai";
import { TbUserSquare } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";
import { LuMessageSquareText } from "react-icons/lu";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    useEffect(() => {
        const handleScroll = () => {
        const sections = ["home", "about", "experience", "projects", "contact"];
        let current = "null";
        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                current = id;
            }
            }
        });
        if (window.scrollY < 100)
            current = "home";
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50)
            current = "contact";
        
        setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<nav className={styles.navbar}>
        <div className={styles.menu}>
            <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`} onClick={() => setMenuOpen(false)}>
                <li>
                    <a className={activeSection === "home" ? styles.active : ""} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} role="button">
                    <AiOutlineHome size={25}/>
                    </a>
                </li>
                <li>
                    <a href="#about" className={activeSection === "about" ? styles.active : ""}>
                    <TbUserSquare  size={25}/>
                    </a>
                </li>
                <li>
                    <a href="#experience" className={activeSection === "experience" ? styles.active : ""}>
                    <FiBookOpen size={25}/>
                    </a>
                </li>
                <li>
                    <a href="#projects" className={activeSection === "projects" ? styles.active : ""}>
                    <GoProjectSymlink size={25}/>
                    </a>
                </li>
                <li>
                    <a href="#contact" className={activeSection === "contact" ? styles.active : ""}>
                    <LuMessageSquareText size={25}/>
                    </a>
                </li>
            </ul>
        </div>
    </nav>);
};