import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Trending from '..';

it('trending component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Trending />
    </Provider>
  ,
  );

  const TrendingEl = queryByTitle('Trending');
  expect(TrendingEl).toBeVisible();
});
