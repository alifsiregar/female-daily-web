import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '..';

it('footer component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  ,
  );

  const FooterEl = queryByTitle('Footer');
  expect(FooterEl).toBeVisible();
});
