const theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    error: '#e74c3c',
    text: '#ffffff',
    background: 'rgba(47, 72, 111, 0.62)',
    cardBackground: 'rgba(11, 27, 52, 0.62)',
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      small: '0.8rem',
      normal: '1rem',
      large: '1.2rem',
      title: '2rem',
      temperature: '2.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  shadows: {
    card: '0 8px 16px rgba(0, 0, 0, 0.2)',
    button: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export type Theme = typeof theme;
export default theme;
