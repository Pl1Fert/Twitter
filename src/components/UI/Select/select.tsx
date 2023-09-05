import { memo } from "react";

import { ISelectProps } from "./select.interfaces";
import { StyledOption, StyledSelect } from "./select.styled";

export const Select = memo<ISelectProps>(({ width, placeholder, name, options }) => (
    <StyledSelect $width={width} name={name}>
        <StyledOption value="" disabled selected>
            {placeholder}
        </StyledOption>
        {options.map((item) => (
            <StyledOption key={item} value={item}>
                {item}
            </StyledOption>
        ))}
    </StyledSelect>
));
