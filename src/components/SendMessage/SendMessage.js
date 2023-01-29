import React from 'react';
import styles from './SendMessage.module.css'
import app from '../../firebase.config'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const auth = getAuth(app);

const SendMessage = () => {

    const onCapthaVerify = () => {

        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'normal',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
            }
        }, auth);
    }

    const onSignInSubmit = () => {
        const phoneNumber = this.state.mobile;
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
    }
    return (
        <div className={styles.container}>
            <form>
                <h1>Send OTP </h1>
                <input type="text" placeholder='Enter phone number e.g. 1555334345343' />
                <br />
                <button type='sumbit' name='button'>Send</button>
                <div id='recaptcha-container'></div>
            </form>
        </div>
    );
};

export default SendMessage;