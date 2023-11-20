import React from 'react';
import * as ReactDOM from 'react-dom';
import { Tooltip } from '../src/stories/Tooltip';

describe('Tooltip', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tooltip label={'Hello World'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
