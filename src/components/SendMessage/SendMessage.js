import React from 'react';
import styles from './SendMessage.module.css'
const SendMessage = () => {
    return (
        <div className={styles.container}>
            <form>
                <h1>Send OTP </h1>
                <input type="text" placeholder='Enter phone number e.g. 1555334345343' />
                <br />
                <button type='sumbit' name='button'>Send</button>
            </form>
        </div>
    );
};

export default SendMessage;