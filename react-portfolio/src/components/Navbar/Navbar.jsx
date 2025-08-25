import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../Navbar/Navbar.module.css';
import {getImageUrl} from "../../utils";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { LuMessageSquareText } from "react-icons/lu";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    useEffect(() => {
        const handleScroll = () => {
        const sections = ["home", "about", "experience", "projects", "contact"];
        let current = "home";

        if (window.scrollY > 100) {
        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                current = id;
            }
            }
        });
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50)
            current = "contact";
        }
        setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<nav className={styles.navbar}>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={
                menuOpen
                    ? getImageUrl("nav/closeIcon.png") 
                    : getImageUrl("nav/menuIcon.png")}
                alt="menu-button"
                onClick = {() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`} onClick={() => setMenuOpen(false)}>
                <li>
                    <a className={activeSection === "home" ? styles.active : ""} href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); window.history.pushState(null, "", "#home");}}>
                    <AiOutlineHome />
                    </a>
                </li>
                
                <li>
                    <a href="#about" className={activeSection === "about" ? styles.active : ""}>
                    <AiOutlineUser/>
                    </a>
                </li>
                <li>
                    <a href="#experience" className={activeSection === "experience" ? styles.active : ""}>
                    <BiBook/>
                    </a>
                </li>
                <li>
                    <a href="#projects" className={activeSection === "projects" ? styles.active : ""}>
                    <GoProjectSymlink/>
                    </a>
                </li>
                <li>
                    <a href="#contact" className={activeSection === "contact" ? styles.active : ""}>
                    <LuMessageSquareText/>
                    </a>
                </li>
            </ul>
        </div>
    </nav>);
};