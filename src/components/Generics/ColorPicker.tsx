import { Typography } from "@mui/material";
import { MuiColorInput } from "mui-color-input";

interface Props {
  fieldName: string;
  value: string;
  onChange: (data: string) => any;
}

export const ColorPicker = ({ value, onChange, fieldName }: Props) => {
  return (
    <>
      <Typography sx={{ fontSize: 14, mt: 1 }}>{fieldName}</Typography>
      <MuiColorInput
        sx={{ mt: 1 }}
        value={value}
        onChange={(data) => onChange(data)}
      />
    </>
  );
};
