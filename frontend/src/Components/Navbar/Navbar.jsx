import React, { useEffect, useRef, useState } from "react";

//ICONS
import { AiFillHome, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline, IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
//ROUTERS
import { Link, useLocation } from "react-router-dom";

//MODULE CSS
import styles from "../../Css/Navbar/Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const currentPage = useRef(location.pathname.slice(1));
  const [page, setPage] = useState(currentPage.current);
  useEffect(() => {
    if (location.pathname !== "/") {
      currentPage.current = window.location.pathname.slice(1);
    } else {
      currentPage.current = "home";
    }
    setPage(currentPage.current);
  }, [location]);

  return (
    <div className={styles.navbarContainer}>
      <Link to="/">Logo</Link>
      <ul className={styles.navbarList} id="navbarList">
        <li className={styles.navbarItem}>
          <Link className={page === "home" ? styles.activeNav : styles.navLink} to="/">
            <AiFillHome />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={page === "notifications" ? styles.activeNav : styles.navLink} to="notifications">
            <IoMdNotificationsOutline />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={page === "message" ? styles.activeNav : styles.navLink} to="message">
            <AiOutlineMessage />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={page === "friends" ? styles.activeNav : styles.navLink} to="friends">
            <AiOutlineUser />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={page === "saved" ? styles.activeNav : styles.navLink} to="saved">
            <GoBookmark />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={page === "settings" ? styles.activeNav : styles.navLink} to="settings">
            <IoSettingsOutline />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={page === "logout" ? styles.activeNav : styles.navLink} to="logout">
            <IoIosLogOut />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
