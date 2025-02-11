import styled from '@emotion/styled';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const SpinnerWrapper = styled.div<SpinnerProps>`
  display: inline-block;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: ${({ color, theme }) => color || theme.colors.primary};
  animation: spin 1s linear infinite;

  width: ${({ size }) => {
    switch (size) {
      case 'sm': return '20px';
      case 'lg': return '40px';
      default: return '30px';
    }
  }};

  height: ${({ size }) => {
    switch (size) {
      case 'sm': return '20px';
      case 'lg': return '40px';
      default: return '30px';
    }
  }};

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
