import React, { useState } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import styles from './Quiz.module.scss';
import Card from '../../components/Card';
import ResultDisplay from '../../components/ResultDisplay';
import ProgressBar from '../../components/ProgressBar';
import QuestionWithAnswers from '../../components/QuestionWithAnswers';
import { Spinner } from 'react-bootstrap';
import { useFetchQuestions } from '../../hooks/useFetchQuestions';

interface QuizProps
  extends RouteComponentProps<{
    location: { state: { categoryId: number } };
  }> {}

const Quiz = ({ location }: QuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);

  const { data: questionsData, loading } = useFetchQuestions(
    location?.state?.categoryId || 18,
  );

  const handleAnswer = (answer: string) => {
    if (!showAnswer && questionsData) {
      if (answer === questionsData[currentIndex].correct_answer) {
        setUserAnswers((prevValues: boolean[]) => [...prevValues, true]);
      } else {
        setUserAnswers((prevValues: boolean[]) => [...prevValues, false]);
      }

      setShowAnswer(true);
    }
  };

  const handleNextQuestion = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setShowAnswer(false);
  };

  return (
    <section className="container d-flex align-items-center flex-column pb-4">
      <p className={styles.logo}>Quiz</p>
      <Link to="/" className={styles.anotherCategoryLink}>
        Select another category
      </Link>
      {currentIndex === questionsData?.length ? (
        <ResultDisplay userAnswers={userAnswers} />
      ) : (
        <Card>
          {!loading ? (
            <>
              <ProgressBar
                currentIndex={currentIndex}
                userAnswers={userAnswers}
              />
              {questionsData && (
                <QuestionWithAnswers
                  data={questionsData[currentIndex]}
                  handleAnswer={handleAnswer}
                  showAnswers={showAnswer}
                  handleNextQuestion={handleNextQuestion}
                />
              )}
            </>
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="light" />
            </div>
          )}
        </Card>
      )}
    </section>
  );
};

export default Quiz;
