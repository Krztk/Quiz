import React, { FC } from 'react';
import cls from 'classnames';
import styles from './ProgressBar.module.scss';
import { Col, Row } from 'react-bootstrap';
import { getScore } from '../../utils/helpers';

type ProgressBarProps = {
  currentIndex: number;
  userAnswers: boolean[];
};

const ProgressBar: FC<ProgressBarProps> = ({ currentIndex, userAnswers }) => {
  const score = getScore(userAnswers);

  return (
    <>
      <Row>
        <Col xs={6} className="d-flex justify-content-center">
          <p>
            Score:{' '}
            <span className="fw-bold" data-testid="score">
              {score}
            </span>
          </p>
        </Col>
        <Col xs={6} className="d-flex justify-content-center">
          <p>Progress: {currentIndex + 1}/10</p>
        </Col>
      </Row>
      <div className="d-flex justify-content-center user-select-none">
        <ul className={cls(styles.answerList, 'd-flex')}>
          {userAnswers?.map((value, index) => (
            <li
              key={index}
              className={cls(
                value ? styles.singleBox__green : styles.singleBox__red,
              )}>
              {value ? '✔' : '✘'}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProgressBar;
