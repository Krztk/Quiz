import { useEffect, useState } from 'react';

const API_URL = (categoryId: number) =>
  `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`;

export type QuestionProps = {
  correct_answer: string;
  all_answers: string[];
  question: string;
  incorrect_answers: string[];
};

export const useFetchQuestions = (categoryId: number) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<QuestionProps[]>();

  useEffect(() => {
    setLoading(true);
    fetch(API_URL(categoryId))
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.results.map((item: QuestionProps) => ({
          question: item.question,
          correct_answer: item.correct_answer,
          all_answers: [item.correct_answer, ...item.incorrect_answers].sort(
            () => Math.random() - 0.5,
          ),
        }));
        setData(formattedData);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { loading, data };
};
