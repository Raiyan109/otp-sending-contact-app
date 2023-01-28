import React from 'react';
import styles from './ContactInfo.module.css'
const ContactInfo = ({ contacts }) => {
    const { name, phone } = contacts
    return (
        <div>
            <h1>Contact info </h1>
            <span className={styles.phone}>Phone: {phone}</span>
        </div>
    );
};

export default ContactInfo;