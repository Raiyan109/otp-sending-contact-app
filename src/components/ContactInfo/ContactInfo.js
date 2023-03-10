import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ContactInfo.module.css'
const ContactInfo = ({ contacts }) => {
    // const { name, phone } = contacts
    const { id } = useParams()
    const [info, setInfo] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    return (

        <div className={styles.container}>
            <h1>Contact info</h1>
            <h1>Name : {info.name}</h1>
            <h2 className={styles.phone}>Phone: {info.phone}</h2>
            <Link to='/sendMessage' className={styles.button}>Send Message</Link>
        </div>
    );
};

export default ContactInfo;