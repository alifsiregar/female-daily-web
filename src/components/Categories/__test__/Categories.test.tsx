import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from '..';

it('categories component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Categories />
    </Provider>
  ,
  );

  const CategoriesEl = queryByTitle('Categories');
  expect(CategoriesEl).toBeVisible();
});
