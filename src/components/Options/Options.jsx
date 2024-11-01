import React from 'react';
import styles from './Options.module.css'

const Options = ({ feedbackTypes, updateFeedback, totalFeedback, resetFeedback }) => {
    return (
        <div className={styles.box}>
            <h2 className={styles.name}>Please leave your feedback about our service by selecting one of the options below.</h2>
            <button className={styles.button} onClick={() => updateFeedback('good')}>Good</button>
            <button className={styles.button} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={styles.button} onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && <button className={styles.button} onClick={resetFeedback}>Reset</button>}
        </div>
    );
};

export default Options;