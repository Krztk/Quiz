import React, { FC } from 'react';
import { decodeHtmlString } from '../../utils/helpers';
import { QuestionProps } from '../../hooks/useFetchQuestions';

import cls from 'classnames';
import styles from './QuestionWithAnswers.module.scss';
import { Col, Row } from 'react-bootstrap';

type QuestionWithAnswersProps = {
  handleNextQuestion: () => void;
  handleAnswer: (arg1: string) => void;
  showAnswers: boolean;
  data: Omit<QuestionProps, 'incorrect_answers'>;
};

const QuestionWithAnswers: FC<QuestionWithAnswersProps> = ({
  handleNextQuestion,
  handleAnswer,
  showAnswers,
  data: { question, correct_answer, all_answers },
}) => {
  return (
    <>
      <h5 className="text-center mb-4">{decodeHtmlString(question)}</h5>
      <Row style={{ alignItems: 'stretch', rowGap: '20px' }}>
        {all_answers.map((answer, index) => {
          const buttonClass = showAnswers
            ? answer === correct_answer
              ? styles.button__green
              : styles.button__red
            : styles.button__yellow;
          return (
            <Col xs={12} md={6} lg={3} key={index}>
              <button
                className={buttonClass}
                onClick={() => handleAnswer(answer)}>
                {decodeHtmlString(answer)}
              </button>
            </Col>
          );
        })}
      </Row>

      <div
        className={cls(
          styles.nextButtonContainer,
          'd-flex justify-content-center align-items-center',
        )}>
        {showAnswers && (
          <button className={styles.button__next} onClick={handleNextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </>
  );
};

export default QuestionWithAnswers;
