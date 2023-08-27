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
          <Link to="/">
            <AiFillHome />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="notifications">
            <IoMdNotificationsOutline />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="message">
            <AiOutlineMessage />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="friends">
            <AiOutlineUser />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="saved">
            <GoBookmark />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="settings">
            <IoSettingsOutline />
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="logout">
            <IoIosLogOut />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
