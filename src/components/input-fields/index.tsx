import { TextField, type TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

const CustomTextField = forwardRef<
  HTMLDivElement,
  TextFieldProps & { errors?: boolean }
>(({ label, errors, helperText, placeholder, ...props }, ref) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      error={errors}
      helperText={helperText}
      placeholder={placeholder}
      inputRef={ref}
      slotProps={{
        inputLabel: {
          shrink: true,
          style: { color: "#121212" },
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        },
      }}
      {...props}
    />
  );
});

CustomTextField.displayName = "CustomTextField";

export default CustomTextField;
