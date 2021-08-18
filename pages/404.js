import React, { useEffect } from "react";
import Router from "next/router";
import styles from "../styles/Error.module.css";
import Link from 'next/link'

function ErrorPage() {
  // useEffect(() => {
  //   setInterval(() => {
  //     Router.push("/");
  //   }, 10000);
  // }, []);

  return (
    <div className={styles.error_bg}>
    <Link href='/'>
    <a>
      <header className={styles.top_header}></header>

      <div>
        <div className={styles.starsec}></div>
        <div className={styles.starthird}></div>
        <div className={styles.starfourth}></div>
        <div className={styles.starfifth}></div>
      </div>

      <div className={styles.lamp__wrap}>
        <div className={styles.lamp}>
          <div className={styles.cable}></div>
          <div className={styles.cover}></div>
          <div className={styles.in_cover}>
            <div className={styles.bulb}></div>
          </div>
          <div className={styles.light}></div>
        </div>
      </div>
      <section className={styles.error}>
        <div className={styles.error__content}>
          <div className={`${styles.error__message} ${styles.message}`}>
            <h1 className={styles.message__title}>Page Not Found</h1>
            <p className={styles.message__text}>
              We're sorry, the page you were looking for isn't found here, Do
              ensure Your internet connection is stable and try again
            </p>
          </div>
          <div className={`${styles.error__nav} ${styles.e_nav}`}>
            <Link href='/'>
              <a className={styles.e_nav__link}>
                Home Page
              </a>
            </Link>
          </div>
        </div>
      </section>
    </a>
    </Link>
    </div>
  );
}

export default ErrorPage;
