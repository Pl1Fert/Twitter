import { memo } from "react";

import { IInputProps } from "./input.interfaces";
import { StyledInput } from "./input.styled";

export const Input = memo<IInputProps>(({ width, placeholder, name }) => (
    <StyledInput type="text" $width={width} placeholder={placeholder} name={name} />
));
