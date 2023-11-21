import React from 'react';
import * as ReactDOM from 'react-dom';
import FontEditor from '../src/stories/Tooltip';

describe('Tooltip', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FontEditor label={'Hello World'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
