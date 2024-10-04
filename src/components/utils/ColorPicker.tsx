import React, { useState } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker, ColorResult } from 'react-color';

interface RGBColor {
    r: number;
    g: number;
    b: number;
    a?: number; // Make alpha optional if it can be undefined
}

interface ColorPickerProps {
    onColorChange: (hex: string) => void; // Callback to pass the hex value
}

const ColorPicker: React.FC<ColorPickerProps> = ({onColorChange}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState<RGBColor>({r: 241, g: 112, b: 19, a: 1});

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color: ColorResult) => {
    const hexColor = color.hex; // Get the hex value from ColorResult
    setColor({
        r: color.rgb.r,
        g: color.rgb.g,
        b: color.rgb.b,
        a: (color.rgb.a !== undefined ? color.rgb.a : 1),
    });
    onColorChange(hexColor);
  };

  const styles = reactCSS({
    default: {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute' as const,  // Cast to const to ensure type compatibility
        zIndex: 2,                      // Change to number type
      },
      cover: {
        position: 'fixed' as const,      // Cast to const
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
