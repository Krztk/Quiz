import { render } from '@testing-library/react';
import ProgressBar from '../components/ProgressBar';

test('displays initial score', async () => {
  const ProgressBarComponent = render(
    <ProgressBar currentIndex={0} userAnswers={[]} />,
  );

  const progressScore = ProgressBarComponent.getByTestId('score');
  expect(progressScore).toHaveTextContent('0');
});
