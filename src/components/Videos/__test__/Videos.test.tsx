import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Videos from '..';

it('videos component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Videos />
    </Provider>
  ,
  );

  const TrendingEl = queryByTitle('Videos');
  expect(TrendingEl).toBeVisible();
});
