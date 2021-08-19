import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '..';

it('header component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  ,
  );

  const HeaderEl = queryByTitle('Header');
  expect(HeaderEl).toBeVisible();
});
