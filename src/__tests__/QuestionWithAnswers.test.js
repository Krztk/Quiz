import QuestionWithAnswers from '../components/QuestionWithAnswers';
import { render } from '@testing-library/react';

const FAKE_DATA = {
  question:
    'The Harvard architecture for micro-controllers added which additional bus?',
  correct_answer: 'Instruction',
  all_answers: ['Data', 'Control', 'Address', 'Instruction'],
};

test('answer buttons are yellow on initial render', async () => {
  const QuestionWithAnswersComponent = render(
    <QuestionWithAnswers
      handleNextQuestion={() => {}}
      handleAnswer={() => {}}
      showAnswers={false}
      data={FAKE_DATA}
    />,
  );

  const buttonArray = QuestionWithAnswersComponent.getAllByRole('button');

  for (let i = 0; i < buttonArray.length; i++) {
    expect(buttonArray[i]).toHaveClass('button__yellow');
  }
});
