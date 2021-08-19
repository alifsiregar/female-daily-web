import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Popular from '..';

it('popular component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Popular />
    </Provider>
  ,
  );

  const PopularEl = queryByTitle('Popular');
  expect(PopularEl).toBeVisible();
});
