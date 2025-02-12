import styled from '@emotion/styled';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 28px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;

  background: ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return `linear-gradient(270deg, ${theme.colors.secondary} 0%, ${theme.colors.secondary} 100%)`;
      case 'danger':
        return theme.colors.error;
      default:
        return `linear-gradient(270deg, ${theme.colors.primary} 0%, ${theme.colors.primary} 100%)`;
    }
  }};

  color: ${({ theme }) => theme.colors.text};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
