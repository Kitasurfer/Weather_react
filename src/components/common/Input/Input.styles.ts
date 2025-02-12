import styled from "@emotion/styled";

interface InputStyleProps {
  $hasError?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledInput = styled.input<InputStyleProps>`
  width: 570px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ $hasError }) => ($hasError ? "#ff4d4f" : "#ffffff")};
  border-radius: 40px;
  backdrop-filter: blur(8px);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #ffffff;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #3678b4;
    box-shadow: 0 0 0 3px rgba(54, 120, 180, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 4px;
`;