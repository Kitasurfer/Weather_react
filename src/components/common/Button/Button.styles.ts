import styled from "@emotion/styled";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 25px; 
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  transition: all 0.3s ease;

  background-color: rgb(81, 120, 177); 
  color: white;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;