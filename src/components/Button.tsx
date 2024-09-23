import Button, { ButtonProps } from "@mui/material/Button";

export default function CustomButton({
  children,
  style,
  color,
  ...extraProps
}: ButtonProps) {
  let extraStyles = {}

  return (
    <Button style={{ textTransform: "none", ...style, ...extraStyles }} sx={{color: "secondary.main", backgroundColor: "secondary.main"}} {...extraProps}>
      {children}
    </Button>
  );
}
