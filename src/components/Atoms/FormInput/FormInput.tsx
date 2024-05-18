import { ReactHookFormLabelController } from "@common/types";
import { TextFieldProps, TextField } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { FocusEvent, ForwardedRef, forwardRef } from "react";
import { Controller } from "react-hook-form";

export const Error = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 8,
  fontSize: theme.spacing(1.5),
  color: "error",
}));

export type ValidateErrorProps = {
  regexValidation?: RegExp;
};

export type InputProps = ReactHookFormLabelController<TextFieldProps> &
  ValidateErrorProps;

export const FormInput = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      label,
      name,
      size,
      margin,
      type,
      fullWidth,
      helperText,
      rules,
      control,
      password,
      disabled,
      InputProps,
      placeholder,
      InputLabelProps,
      autoComplete,
      sx,
      regexValidation,
      onInputBlur,
      onInputChange,
      isRounding,
      multiline,
      rows,
    } = props;

    return (
      <Controller
        render={({ field: { value, onBlur, onChange } }) => (
          <TextField
            error={Boolean(helperText?.length)}
            helperText={<Error component="span">{helperText}</Error>}
            label={label}
            onChange={(e) => {
              if (onInputChange) {
                onInputChange({ value, name });
              }
              if (regexValidation) {
                if (
                  e.target.value === "" ||
                  regexValidation.test(e.target.value)
                ) {
                  onChange(e);
                }
              } else {
                onChange(e);
              }
            }}
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              onBlur(e);
              if (onInputBlur) {
                if (isRounding) {
                  onInputBlur(e.target.value || 0);
                } else {
                  onInputBlur({ value, name });
                }
              }
            }}
            margin={margin}
            size={size}
            type={type}
            value={value || ""}
            fullWidth={fullWidth}
            disabled={disabled}
            ref={ref}
            placeholder={placeholder}
            InputLabelProps={InputLabelProps}
            InputProps={{ ...InputProps, "data-testid": `input-${name}` }}
            autoComplete={autoComplete}
            multiline={multiline}
            rows={rows}
            sx={sx}
          />
        )}
        rules={
          password
            ? {
                ...rules,
                validate: (value) =>
                  value === password || "Passwords do not match",
              }
            : { ...rules }
        }
        control={control}
        name={name}
      />
    );
  }
);
