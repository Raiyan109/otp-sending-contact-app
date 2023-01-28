import React from 'react';
import styles from './SendMessage.module.css'
const SendMessage = () => {
    return (
        <div>
            <label>
                <input type="text" />
            </label>
            <button>Send</button>
        </div>
    );
};

export default SendMessage;