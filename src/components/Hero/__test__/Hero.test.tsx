import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '..';

it('hero component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Hero />
    </Provider>
  ,
  );

  const HeroEl = queryByTitle('Hero');
  expect(HeroEl).toBeVisible();
});
