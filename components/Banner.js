import React, {useContext} from 'react'
import styles from '../styles/Banner.module.css'
import {userContext} from '../utils/userContext'
import Link from 'next/link'

function Banner({setShow}) {

    const [userData, setUserData] = useContext(userContext)
    return (
        <div className={styles.banner__container} onClick={setShow}>
            <h2>Welcome {userData.username} to the car portal's virtual space</h2>
            <p>Where would you like to visit?</p>
            
            <div className={styles.link_container}>
                <Link href="/events">
                    <a>
                        Events
                    </a>
                </Link>
                <Link href="/stores">
                    <a>
                        Store
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Banner
