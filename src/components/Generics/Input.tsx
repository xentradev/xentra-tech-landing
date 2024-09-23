import { OutlinedInput, Typography } from "@mui/material";
import React from "react";

interface Props {
  fieldName: string;
  name: string;
  placeholder: string;
  value: any;
  onChange: (data: any) => void;
  error: boolean;
  fullWidth: boolean;
  autocomplete?: string;
}

export const Input = ({
  fieldName,
  name,
  placeholder,
  value,
  onChange,
  error,
  autocomplete = "off",
  fullWidth = false,
}: Props) => {
  return (
    <>
      <Typography sx={{ fontSize: 14, mt: 1 }}>{fieldName}</Typography>
      <OutlinedInput
        fullWidth
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
        value={value}
        onChange={onChange}
        error={error}
        sx={{
          borderRadius: 2,
          marginTop: 1,
          gap: 1,
          alignItems: "center",
          color: "black",
          backgroundColor: "white",
        }}
      />
      <Typography sx={{ fontSize: 14, mt: 0.5, color: "red" }}>
        {error}
      </Typography>
    </>
  );
};
