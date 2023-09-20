import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  styled
} from "@mui/material";
import { useFormikContext } from "formik";
import React, { useState } from "react";

type InputProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
}

const CustomInput = ({
  name,
  label,
  placeholder = "",
  type = "text",
  disabled,
  multiline = false,
  rows = 0,
}: InputProps) => {


  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const { errors, touched, values, handleChange, handleBlur } =
    useFormikContext<any>();
  return (
    <FormInputWrapper>
      <Typography variant="body2" color="#8A9099">
        {label}
      </Typography>
      <Field
        name={name}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        size="small"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched[name] && Boolean(errors[name])}
        placeholder={placeholder}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        endAdornment={
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
      {touched[name] && Boolean(errors[name]) && (
        <FormHelperText
          sx={{ fontWeight: "500", color: 'red' }}
        >
          {errors[name] as string}
        </FormHelperText>
      )}
    </FormInputWrapper>
  )
}

export default CustomInput

const FormInputWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
}));

const Field = styled(OutlinedInput)(({ theme }) => ({
  border: "1px solid #FFF",
  width: "100%",
  input: {
    color: "#3a3f44",
  },
  label: { color: "rgba(0,0,0,0.3)" },
}));