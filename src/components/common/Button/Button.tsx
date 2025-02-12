import { StyledButton } from './Button.styles'; 
import { ButtonProps } from './types'; 

function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;