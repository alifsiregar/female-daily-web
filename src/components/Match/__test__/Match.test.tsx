import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Match from '..';

it('match component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Match />
    </Provider>
  ,
  );

  const MatchEl = queryByTitle('Match');
  expect(MatchEl).toBeVisible();
});
