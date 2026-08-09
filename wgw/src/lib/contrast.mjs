/**
 * WCAG relative luminance and contrast, so a label placed on an arbitrary
 * registry colour can be *measured* rather than guessed. Hurr's accent
 * (#cb5f52) is the case that forced this: white-on-accent measured 3.13 and
 * the hex on the swatch was effectively invisible.
 */

const srgb = (hex) => {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
};

export const luminance = (hex) => {
  const [r, g, b] = srgb(hex).map((c) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const ratio = (a, b) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

/** Whichever of black or white reads better on this ground. */
export const inkOn = (hex) => (ratio('#000000', hex) >= ratio('#ffffff', hex) ? '#000000' : '#ffffff');
