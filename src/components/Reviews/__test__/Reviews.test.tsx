import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reviews from '..';

it('reviews component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Reviews />
    </Provider>
  ,
  );

  const ReviewsEl = queryByTitle('Reviews');
  expect(ReviewsEl).toBeVisible();
});
