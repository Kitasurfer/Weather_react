
import { SpinnerWrapper } from "./Spinner.styles"

function Spinner({
  size = "md",
  color,
}: {
  size?: "sm" | "md" | "lg"
  color?: string
}) {
  return <SpinnerWrapper size={size} color={color} />
}

export default Spinner