# Tooltip React Component

The **Tooltip** component is a tool that provides an information box with text formatting options for React applications.

## Installation

To use the **Tooltip**, you can install it via npm:

```bash
npm install react-font-editor
```

## Usage

Import the **Tooltip** component in your code:

````javascript
import React from 'react';
import { Tooltip } from 'react-font-editor';

const App = () => {
  return (
    <div>
      <h1>Example Usage of Tooltip</h1>
      <Tooltip
        label="Tooltip Text"
        withColor={true}
        withDecoration={true}
        withSize={true}
        fireEvent="click"
        defaultValue={{
          fontFamily: 'Arial, sans-serif',
          fontSize: 14,
          color: '#000000',
          textDecoration: 'none',
        }}
        onStyleChanged={(value) => console.log('Style changed:', value)}
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
  );
};

export default App;

````

## Props

The **Tooltip** component has various configurable props to customize the behavior and style of the tooltip. Some of the main props include:

- ``label``: Text to be displayed in the Tooltip.
- ``withColor``: Enables color selection option for text.
- ``withDecoration``: Enables text formatting option (bold, italic, underline).
- ``withSize``: Enables font size selection option.
- ``fireEvent``: Defines the tooltip activation event (click or hover).
- ``defaultValue``: Initial styles for the content.
- ``onStyleChanged``: Callback function to capture style changes.
Refer to the documentation or component implementation to see all available props.

## Contribution

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/)
 file for more details.
