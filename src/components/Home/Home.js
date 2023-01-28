import React from 'react';
import Cards from '../Cards/Cards';
import SentMessages from '../SentMessages/SentMessages';
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className={styles.mainContainer}>
            <Cards />
            <SentMessages />
        </div>
    );
};

export default Home;