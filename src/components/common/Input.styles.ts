import styled from '@emotion/styled';

interface InputStyleProps {
  $hasError?: boolean;
}

export const StyledInput = styled.input<InputStyleProps>`
  width: 470px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ $hasError, theme }) => 
    $hasError ? theme.colors.error : '#ffffff'};
  border-radius: 40px;
  backdrop-filter: blur(8px);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(54, 120, 180, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
