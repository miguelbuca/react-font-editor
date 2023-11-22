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
  const tooltipModal = (
    <>
      {toggle && (
        <div onMouseOver={tooltipHoverHandler} className="tooltip-content">
          <div
            onClick={e => e.stopPropagation()}
            className="tooltip-content-container"
          >
            <div>
              <select
                value={style.fontFamily}
                onChange={fontFamilyHandler}
                className="tooltip-custom-select"
              >
                {Object.keys(fonts).map((item, index) => (
                  <option key={index} value={fonts[item]}>
                    <span>{Object.keys(fonts)[index]}</span>
                  </option>
                ))}
              </select>
            </div>
            {withSize && (
              <div>
                <select
                  value={style.fontSize}
                  onChange={fontSizeHandler}
                  className="tooltip-custom-select"
                >
                  {Object.keys(sizes).map((item, index) => (
                    <option key={index} value={sizes[item]}>
                      <span>{Object.keys(sizes)[index]}</span>
                    </option>
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
