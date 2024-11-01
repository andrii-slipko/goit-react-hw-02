import React from 'react';
import styles from './Feedback.module.css'

const Feedback = ({ feedbackTypes, totalFeedback, positiveFeedback }) => {
    return (
        <div className={styles.box}>
            <h2 className={styles.name}>Feedback Summary:</h2>
            <p className={styles.text}>Good: {feedbackTypes.good}</p>
            <p className={styles.text}>Neutral: {feedbackTypes.neutral}</p>
            <p className={styles.text}>Bad: {feedbackTypes.bad}</p>
            <p className={styles.text}>Total: {totalFeedback}</p>
            <p className={styles.text}>Positive: {positiveFeedback}%</p>
        </div>
    );
};

export default Feedback;