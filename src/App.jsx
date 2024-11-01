import React, { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import styles from './App.module.css'

const App = () => {
    const [feedbackTypes, setFeedbackTypes] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedbackTypes));
    }, [feedbackTypes]);

    const updateFeedback = (feedbackType) => {
        setFeedbackTypes(prevState => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1
        }));
    };

    const resetFeedback = () => {
        setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
    };

    const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
    const positiveFeedback = Math.round((feedbackTypes.good / totalFeedback) * 100) || 0;

    return (
        <div className={styles.box}>
            <h1 className={styles.name}>Sip Happens Café</h1>
            <Options 
                feedbackTypes={feedbackTypes} 
                updateFeedback={updateFeedback} 
                resetFeedback={resetFeedback} 
                totalFeedback={totalFeedback} 
            />
            {totalFeedback > 0 ? (
                <Feedback 
                    feedbackTypes={feedbackTypes} 
                    totalFeedback={totalFeedback} 
                    positiveFeedback={positiveFeedback} 
                />
            ) : (
                <p>No feedback given yet.</p>
            )}
        </div>
    );
};

export default App;