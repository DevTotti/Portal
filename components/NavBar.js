import next from 'next'
import React, {useEffect, useState} from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useJwt } from 'react-jwt'
import Cookies from 'js-cookie'
import { RiArrowDownSFill } from 'react-icons/ri'
import MartMenu from './MartMenu'

function NavBar({toggle}) {
    let isCookie
    const validToken = () => {
        isCookie = Cookies.get('carToken')
    }
    useEffect(() => {
        const int = setInterval(() => {
            validToken()
        }, 1000 * 60 * 120);
        return () => {
            clearInterval(int)
        }
    }, [])


    const logout = () => {
        console.log("Logged Out");
    }

    return (
        <>
            {/* <MartMenu isOpen={showMart} toggle={toggle}/> */}
            <nav className={styles.nav}>
                <Link href="/">
                <div className={styles.nav_brand}>  
                </div>
              </Link>
                <ul className={styles.nav_links}>
                    <li><Link href='/about'><a>About</a></Link></li>
                    <li onClick={toggle}><a>Auto-Mart</a>< RiArrowDownSFill style={{fontSize: '20px'}}/></li>
                    <li><Link href='/events'><a>Events</a></Link></li>
                    <li><Link href='/stores'><a>Store</a></Link></li>
                    { isCookie ? <li className={styles.auth_btn} onClick={logout}><Link href="/"><a>Logout</a></Link></li> : <li className={styles.auth_btn}><Link href="/login"><a>Login</a></Link></li>}
                    
                </ul>
            </nav>  
        </>
    )
}

export default NavBar
