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
          minHeight: 100,
        }}
      >
        <FontEditor
          label="Your text edited."
          fireEvent="hover"
          defaultValue={{
            fontFamily: 'Courier New, monospace',
            fontSize: 14,
            color: '#000000',
            textDecoration: 'none',
          }}
          onStyleChanged={(value) => setValue(value)}
          sizes={{
            Small: 12,
            Medium: 16,
            Large: 20,
          }}
          fonts={{
            Arial: 'Arial, sans-serif',
            'Times New Roman': 'Times New Roman, serif',
            Verdana: 'Verdana, sans-serif',
            'Courier New': 'Courier New, monospace',
          }}
        />
      </div>
      <div>
        <pre>{JSON.stringify(value)}</pre>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
