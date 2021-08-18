import React, {useState, useEffect} from 'react'
import styles from '../styles/Inspection.module.css'
import {GiCancel} from 'react-icons/gi'
import axios from 'axios'
import { RotateSpinner } from 'react-spinners-kit'
import { FaCheck } from 'react-icons/fa'

function Inspection({toggle, id}) {

    const [disable, setDisable] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [response, setResponse] = useState('')

    useEffect(() => {
        if (name.length > 0 && email.length > 0 && phone.length > 0) {
            setDisable(false)
        }else {
            setDisable(true)
        }
    }, [name, email, phone])

    useEffect(() => {
        // setTimeout(() => {
        //     setResponse('')
        //     toggle(false)
        // }, 4000);
    }, [response])

    const handleInspect = async (e) => {
        e.preventDefault()
        try {
            let info = {
                car: id, name, email, phone
            }
            let res = await axios.post("http://thecarportal.herokuapp.com/automart/inspection/", info)
            setResponse("Your Inspection was created successfully")
        } catch (error) {
            setResponse("An Error Occured, please check internet connection and try again later")
        }
        setEmail('')
        setName('')
        setPhone('')
    }

    return (
        <div className={styles.body}>
            { response? 
                <div className={styles.response__body}>
                    <div className={styles.cancel__icon} onClick={() => toggle(false)}>
                        <GiCancel style={{fontSize: '20px'}}/>
                    </div>
                    <FaCheck className={styles.icon}/>
                    <h2 className={styles.info}>
                        {response}
                    </h2>
                </div>
                :
             <>
                <div className={styles.cancel__icon} onClick={() => toggle(false)}>
                    <GiCancel style={{fontSize: '20px'}}/>
                </div>
                <form>
                    <input type="text" placeholder="Please input your Name" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="Please input your Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="tel" placeholder="Please input your Phone number" value={phone} onChange={e => setPhone(e.target.value)}/>
                    <button className={disable ? styles.disabled : null} disabled={disable} onClick={handleInspect} > Book Inspection</button>
                </form>
            </>
            }
        </div>
    )
}

export default Inspection
