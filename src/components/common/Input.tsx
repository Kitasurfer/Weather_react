import React from 'react';
import { StyledInput } from './Input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <div>
      <StyledInput 
        {...props} 
        $hasError={!!error}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;
