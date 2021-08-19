import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../state';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Editor from '..';

it('editor component rendered correctly', () => {
  const { queryByTitle } = render(
    <Provider store={store}>
      <Editor />
    </Provider>
  ,
  );

  const EditorEl = queryByTitle('Editor');
  expect(EditorEl).toBeVisible();
});
