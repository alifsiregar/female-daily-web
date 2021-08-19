import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Article from '..';

it('article component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Article />
    </Provider>
  ,
  );

  const ArticleEl = queryByTitle('Article');
  expect(ArticleEl).toBeVisible();
});
