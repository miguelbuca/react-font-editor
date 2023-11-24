import React, { CSSProperties, ReactElement } from 'react';
import { useTooltipController } from './controller';
import './styles.css';

export interface TooltipProps {
  /**
   * Initial content styles
   */
  defaultValue?: Pick<
    CSSProperties,
    'fontFamily' | 'fontSize' | 'color' | 'textDecoration'
  >;
  /**
   * Event emit
   */
  fireEvent: 'click' | 'hover';
  /**
   * Element content
   */
  label: ReactElement | string | number;
  /**
   * Font size list
   */
  sizes?: {
    [Symbol in string]: number;
  };
  /**
   * Font family list check in `https://fonts.googleapis.com` for more info
   */
  fonts?: {
    [Symbol in string]: string;
  };
  /**
   * On style change event handler
   */
  onStyleChanged?: (value: CSSProperties) => void;
  /**
   * Enable size option
   */
  withSize?: boolean;
  /**
   * Enable font color option
   */
  withColor?: boolean;
  /**
   * Enable text decoration option
   */
  withDecoration?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Tooltip = ({
  label,
  withColor = true,
  withDecoration = true,
  withSize = true,
  fireEvent = 'click',
  ...args
}: TooltipProps) => {
  const {
    fonts,
    sizes,
    toggle,
    containerProps,
    tooltipHoverHandler,
    fontFamilyHandler,
    fontSizeHandler,
    colorHandler,
    colorPreviewStyles,
    fontWeightHandler,
    textDecorationHandler,
    fontStyleHandler,
    style,
  } = useTooltipController({
    ...args,
    withColor,
    withDecoration,
    withSize,
    fireEvent,
  });

  const ft = fonts || {
    Roboto: 'Roboto, sans-serif',
    'Open Sans': 'Open Sans, sans-serif',
    Lato: 'Lato, sans-serif',
    Montserrat: 'Montserrat, sans-serif',
    Poppins: 'Poppins, sans-serif',
    'Source Sans Pro': 'Source Sans Pro, sans-serif',
    Ubuntu: 'Ubuntu, sans-serif',
    Oswald: 'Oswald, sans-serif',
    'Roboto Condensed': 'Roboto Condensed, sans-serif',
    'Playfair Display': 'Playfair Display, serif',
    Merriweather: 'Merriweather, serif',
    Quicksand: 'Quicksand, sans-serif',
    'Josefin Sans': 'Josefin Sans, sans-serif',
    'Montserrat Alternates': 'Montserrat Alternates, sans-serif',
    Oxygen: 'Oxygen, sans-serif',
    Raleway: 'Raleway, sans-serif',
    'Titillium Web': 'Titillium Web, sans-serif',
    'Varela Round': 'Varela Round, sans-serif',
    Archivo: 'Archivo, sans-serif',
    Cabin: 'Cabin, sans-serif',
    'Advent Pro': 'Advent Pro, cursive',
    'Black Ops One': 'Black Ops One, cursive',
    Cookie: 'Cookie, cursive',
    Dosis: 'Dosis, cursive',
    'Great Vibes': 'Great Vibes, cursive',
    'Indie Flower': 'Indie Flower, cursive',
    'Kaushan Script': 'Kaushan Script, cursive',
    Lobster: 'Lobster, cursive',
    Pacifico: 'Pacifico, cursive',
    Sacramento: 'Sacramento, cursive',
  };

  const tooltipModal = (
    <>
      {toggle && (
        <div onMouseOver={tooltipHoverHandler} className="tooltip-content">
          <div
            onClick={(e) => e.stopPropagation()}
            className="tooltip-content-container"
          >
            <div>
              <select
                style={{
                  fontFamily: 'sans-serif',
                }}
                value={style.fontFamily}
                onChange={fontFamilyHandler}
                className="tooltip-custom-select"
              >
                {Object.keys(ft).map((item, key) => (
                  <option
                    style={{
                      fontFamily: ft[item],
                      textDecoration: 'none',
                      fontWeight: 'normal',
                    }}
                    key={key}
                    label={item.toString()}
                    value={ft[item]}
                  />
                ))}
              </select>
            </div>
            {withSize && (
              <div>
                <select
                  style={{
                    fontFamily: 'sans-serif',
                  }}
                  value={style.fontSize}
                  onChange={fontSizeHandler}
                  className="tooltip-custom-select"
                >
                  {Object.keys(sizes).map((item, key) => (
                    <option
                      style={{
                        fontFamily: 'sans-serif',
                        textDecoration: 'none',
                        fontWeight: 'normal',
                      }}
                      key={key}
                      label={parseInt(item.toString()).toString()}
                      value={sizes[item].toString()}
                    />
                  ))}
                </select>
              </div>
            )}
            {withDecoration && (
              <div className="tooltip-label-style">
                <label
                  onClick={fontWeightHandler}
                  className="tooltip-label tooltip-label-bold"
                >
                  B
                </label>
                <label
                  onClick={fontStyleHandler}
                  className="tooltip-label tooltip-label-italic"
                >
                  i
                </label>
                <label
                  onClick={textDecorationHandler}
                  className="tooltip-label tooltip-label-underline"
                >
                  S
                </label>
              </div>
            )}
            {withColor && (
              <div className="tooltip-color-picker">
                <input
                  onChange={colorHandler}
                  type="color"
                  className="tooltip-custom-color-input"
                />
                <div
                  style={{
                    ...colorPreviewStyles,
                  }}
                  className="tooltip-color-preview"
                ></div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );

  const element =
    typeof label !== 'string' && typeof label !== 'number' ? (
      React.cloneElement(
        label,
        {
          className: 'tooltip-label',
          style,
          ...containerProps,
        },
        <>
          {label.props.children}
          {tooltipModal}
        </>
      )
    ) : (
      <div className="tooltip-label" style={{ ...style }} {...containerProps}>
        {label}
        {tooltipModal}
      </div>
    );

  return element;
};

export default Tooltip;
