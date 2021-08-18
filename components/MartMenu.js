import React from "react";
import Link from "next/link";
import styles from "../styles/Martmenu.module.css";
import { FaTimes } from "react-icons/fa";

function MartMenu({isOpen, toggle}) {
  return (
    
      <>
        <div
          className={`${styles.menu_container} ${
            isOpen ? styles.side__bar : ""
          }`}
          onClick={toggle}
        >
          <div className={styles.cancel__icon}>
              <FaTimes onClick={toggle} />
          </div>
          <ul>
            <li>
              <Link href="/carsales">
                <a>Car Sales</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Car Wash</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Diagnostics Center</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Mechanics</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Spare Part Vendors</a>
              </Link>
            </li>
            <li className={styles.contact}>
              Cant find what youre looking for?
              <Link href="">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </>
    
  );
}

export default MartMenu;
