import React from "react"
import { Container, StyledInput, ErrorMessage } from "./Input.styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

function Input({ error, ...props }: InputProps) {
  return (
    <Container>
      <StyledInput theme={undefined} {...props} $hasError={!!error} />
      {error && <ErrorMessage theme={undefined}>{error}</ErrorMessage>}
    </Container>
  )
}

export default Input
