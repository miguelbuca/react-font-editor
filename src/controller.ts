import {
  CSSProperties,
  HTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { TooltipProps } from '.';

export const useTooltipController = (args?: Omit<TooltipProps, 'label'>) => {
  const [toggle, setToggle] = useState(false);
  const [fontFamily, setFontFamily] = useState<string>(
    args?.defaultValue?.fontFamily || ''
  );
  const [fontSize, setFontSize] = useState<number | string>(
    args?.defaultValue?.fontSize || 16
  );
  const [color, setColor] = useState(args?.defaultValue?.color || '#000');
  const [fontWeight, setFontWeight] = useState<'normal' | 'bold'>('normal');
  const [fontStyle, setFontStyle] = useState<'normal' | 'italic'>('normal');
  const [textDecoration, setTextDecoration] = useState<'none' | 'underline'>(
    'none'
  );

  const [fonts, setFonts] = useState<{
    [Symbol in string]: string;
  }>();
  const [sizes, setSizes] = useState<
    {
      [Symbol in string]: number;
    }
  >({
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    14: 14,
    16: 16,
    18: 18,
    20: 20,
    22: 22,
    24: 24,
    26: 26,
    28: 28,
    36: 36,
    48: 48,
    72: 72,
  });

  useEffect(() => {
    args?.sizes && setSizes(args.sizes);
    args?.fonts && setFonts(args.fonts);
  }, [args]);

  useEffect(() => {
    if (!fonts) return;
    Object.values(fonts).forEach(value => {
      return (document.head.innerHTML += `<link href="https://fonts.googleapis.com/css2?family=${value}" rel="stylesheet">`);
    });
  }, [fonts]);

  const style: CSSProperties = useMemo(() => {
    return {
      fontFamily,
      fontSize,
      fontStyle,
      textDecoration,
      fontWeight,
      color,
    };
  }, [fontFamily, fontSize, fontStyle, textDecoration, color, fontWeight]);

  const toggleHandler = (state?: boolean) =>
    setToggle(prev => (state !== undefined ? state : !prev));

  const containerProps: Pick<
    HTMLAttributes<HTMLDivElement>,
    'onClick' | 'onMouseOver' | 'onMouseLeave' | 'onDoubleClick' | 'className'
  > = {
    className: 'tooltip-container',
    onClick:
      args?.fireEvent === 'click' ? () => toggleHandler(!toggle) : undefined,
    onMouseOver:
      args?.fireEvent === 'hover' ? () => toggleHandler(true) : undefined,
    onMouseLeave: () => toggleHandler(false),
    onDoubleClick: () => toggleHandler(false),
  };

  const colorPreviewStyles: CSSProperties = {
    backgroundColor: color,
  };

  const tooltipHoverHandler = () => toggleHandler(true);

  const fontFamilyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
    toggleHandler(false);
  };

  const fontSizeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(parseFloat(e.target.value));
    toggleHandler(false);
  };

  const colorHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setColor(e.target.value);

  const fontWeightHandler = () =>
    setFontWeight(prev => (prev === 'bold' ? 'normal' : 'bold'));

  const textDecorationHandler = () =>
    setTextDecoration(prev => (prev === 'underline' ? 'none' : 'underline'));

  const fontStyleHandler = () =>
    setFontStyle(prev => (prev === 'italic' ? 'normal' : 'italic'));

  useEffect(() => {
    args?.onStyleChanged?.(style);
  }, [style]);

  return {
    fonts,
    sizes,
    style,
    toggle,
    toggleHandler,
    containerProps,
    tooltipHoverHandler,
    fontFamilyHandler,
    fontSizeHandler,
    colorPreviewStyles,
    colorHandler,
    fontWeightHandler,
    textDecorationHandler,
    fontStyleHandler,
  };
};
