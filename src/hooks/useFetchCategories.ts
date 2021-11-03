import { useEffect, useState } from 'react';

const API_URL = 'https://opentdb.com/api_category.php';

export type CategoryProps = {
  id: number;
  name: string;
};

export const useFetchCategories = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CategoryProps[]>();

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.trivia_categories);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, data };
};
