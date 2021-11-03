import React, { useState } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import { Form, Spinner } from 'react-bootstrap';
import {
  CategoryProps,
  useFetchCategories,
} from '../../hooks/useFetchCategories';

const Home = (props: RouteComponentProps) => {
  const [categoryId, setCategoryId] = useState<number>();

  const { data, loading } = useFetchCategories();

  return (
    <div className="container d-flex align-items-center flex-column pt-6">
      {!loading ? (
        <Form className="text-center">
          <Form.Label>Select Question Category</Form.Label>
          <Form.Select
            value={categoryId}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setCategoryId(parseInt(e.target.value));
            }}>
            {data?.map((singleCategory: CategoryProps) => (
              <option key={singleCategory.id} value={singleCategory.id}>
                {singleCategory.name}
              </option>
            ))}
          </Form.Select>
        </Form>
      ) : (
        <Spinner animation="border" variant="light" />
      )}

      {categoryId && (
        <Link to="/quiz" state={{ categoryId }} className="mt-4">
          <h2>Go to Quiz</h2>
        </Link>
      )}
    </div>
  );
};

export default Home;
