import { forwardRef } from "react";

import { IInputProps } from "./input.interfaces";
import { StyledInput } from "./input.styled";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    (
        { width, placeholder, name, onChange, onBlur, type = "text", defaultValue, autoComplete },
        ref
    ) => (
        <StyledInput
            type={type}
            $width={width}
            placeholder={placeholder}
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
        />
    )
);
