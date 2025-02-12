import { Container, StyledInput, ErrorMessage } from "./Input.styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

function Input({ error, ...props }: InputProps) {
  return (
    <Container>
      <StyledInput {...props} $hasError={!!error} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default Input
