import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Brands from '..';

it('brands component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Brands />
    </Provider>
  ,
  );

  const BrandsEl = queryByTitle('Brands');
  expect(BrandsEl).toBeVisible();
});
