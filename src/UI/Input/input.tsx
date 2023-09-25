import { forwardRef } from "react";

import { IInputProps } from "./input.interfaces";
import { ErrorMessage, StyledInput } from "./input.styled";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    (
        {
            width,
            placeholder,
            name,
            onChange,
            onBlur,
            type = "text",
            defaultValue,
            autoComplete,
            errorMessage,
        },
        ref
    ) => (
        <div>
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
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    )
);
