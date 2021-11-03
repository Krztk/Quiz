export const decodeHtmlString = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

export const getScore = (arrayWithAnswers: boolean[]) => {
  return arrayWithAnswers.filter((value) => value).length;
};
