export function lightenColor(col: string, percent: number): string {
  // Clamp between 0 and 1
  const amount = Math.max(0, Math.min(1, percent));

  let r: number, g: number, b: number;

  // Handle rgb/rgba
  if (/^rgba?\(/i.test(col)) {
    const parts = col
      .replace(/rgba?\(/i, '')
      .replace(/\)/, '')
      .split(',')
      .map(s => s.trim());

    r = parseInt(parts[0], 10);
    g = parseInt(parts[1], 10);
    b = parseInt(parts[2], 10);
  } else {
    // Handle hex
    let hex = col.replace('#', '');

    if (hex.length === 3) {
      hex = hex
        .split('')
        .map(ch => ch + ch)
        .join('');
    }

    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  }

  // Lighten toward white
  const newR = Math.round(r + (255 - r) * amount);
  const newG = Math.round(g + (255 - g) * amount);
  const newB = Math.round(b + (255 - b) * amount);

  return `rgb(${newR}, ${newG}, ${newB})`;
}
