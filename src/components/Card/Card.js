import React from 'react';
import styles from './Card.module.css'
import { MdDetails } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Card = ({ contact }) => {
    const navigate = useNavigate()
    const navigateToContactInfo = () => {
        navigate(`/contact/${id}`)
    }
    const { name, id } = contact
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardWrapper}>
                <div className={styles.cardDetails}>
                    <strong>Name: {name}</strong>
                    {/* <span className={styles.phone}>Phone: {phone}</span> */}
                </div>

            </div>
            <button onClick={() => navigateToContactInfo()} className={styles.delete}>
                <MdDetails size={20} />
            </button>
        </div>
    );
};

export default Card;