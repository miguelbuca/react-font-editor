import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FontEditor from '../src';

const App = () => {
  const [value, setValue] = React.useState<React.CSSProperties>();

  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          minHeight: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <FontEditor
          label="Your text edited."
          fireEvent="click"
          onStyleChanged={(value) => setValue(value)}
        />
      </div>
      <div>
        <pre>{JSON.stringify(value)}</pre>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
