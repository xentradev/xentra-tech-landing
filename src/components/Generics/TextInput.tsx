import { Stack, styled, TextField, TextFieldProps } from "@mui/material";
import Text from "./Text";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "50px", // Usar la propiedad de borderRadius del tema
    backgroundColor: theme.palette.background.paper, // Usar el color de fondo del tema
    color: theme.palette.text.primary, // Usar el color de texto primario del tema
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    "& fieldset": {
      borderColor: "transparent", // Quitar el borde
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(2), // Usar el espaciado del tema
    fontSize: theme.typography.fontSize, // Usar el tamaño de fuente del tema
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.text.secondary, // Usar el color de texto secundario del tema
  },
  "& .MuiInputLabel-shrink": {
    color: theme.palette.text.primary, // Usar el color de texto primario del tema cuando el input está enfocado
  },
}));

type Props = {
  label?: string;
  errorMsg?: string | undefined;
} & TextFieldProps;

const TextInput = ({ label, errorMsg, ...extraProps }: Props) => {
  return (
    <Stack gap={1}>
      {label && <Text>{label}</Text>}
      <CustomTextField error={Boolean(errorMsg)} {...extraProps} />
      {errorMsg && <Text sx={{ color: "error.light" }}>{errorMsg}</Text>}
    </Stack>
  );
};

export default TextInput;
