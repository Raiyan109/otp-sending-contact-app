import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'
const Cards = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('contacts.json')
            .then(res => res.json())
            .then(data => setContacts(data))
    }, [])
    return (
        <div className={styles.contactsWrapper}>
            <div className={styles.contacts}>
                {
                    contacts.map(contact => <Card
                        contact={contact}
                    />)
                }
            </div>
        </div>
    );
};

export default Cards;