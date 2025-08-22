import React, { useState } from 'react';
import styles from '../Navbar/Navbar.module.css';
import {getImageUrl} from "../../utils";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { LuMessageSquareText } from "react-icons/lu";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            <AiOutlineHome />
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={
                menuOpen
                    ? getImageUrl("nav/closeIcon.png") 
                    : getImageUrl("nav/menuIcon.png")}
                alt="menu-button"
                onClick = {() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about"><AiOutlineUser/></a>
               </li>
                <li>
                    <a href="#experience"><BiBook/></a>
                </li>
                <li>
                    <a href="#projects"><GoProjectSymlink/></a>
                </li>
                <li>
                    <a href="#contact"><LuMessageSquareText/></a>
                </li>
            </ul>
        </div>
    </nav>;
};