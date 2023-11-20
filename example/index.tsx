import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Tooltip } from '../src/stories/Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip
        fireEvent="click"
        label="Hello world"
        onStyleChanged={() => {}}
        withColor
        withDecoration
        withSize
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
