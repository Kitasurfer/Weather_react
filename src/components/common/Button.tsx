import { StyledButton } from "./Button.styles"
import Spinner from "./Spinner"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"
  loading?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  loading = false,
  children,
  disabled,
  ...rest
}) => {
  return (
    <StyledButton theme={undefined} variant={variant} disabled={disabled || loading} {...rest}>
      {loading ? <Spinner size="sm" /> : children}
    </StyledButton>
  )
}

export default Button
