import { navigate } from '@reach/router';
import React, { FC } from 'react';
import styles from './ResultDisplay.module.scss';
import { getScore } from '../../utils/helpers';

type ResultDisplayProps = {
  userAnswers: boolean[];
};

const ResultDisplay: FC<ResultDisplayProps> = ({ userAnswers }) => {
  const score = getScore(userAnswers);

  return (
    <div className="d-flex align-items-center flex-column">
      <h2>Quiz Finished!</h2>
      <h3>Score: {score}</h3>
      <button className={styles.button} onClick={() => navigate('/')}>
        Try Again
      </button>
    </div>
  );
};

export default ResultDisplay;
