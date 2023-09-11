import { memo } from "react";

import { IButtonProps } from "./button.interfaces";
import { StyledButton } from "./button.styled";

export const Button = memo<IButtonProps>(
    ({ width, icon, content, outline, primary, onClick, type, disabled }) => (
        <StyledButton
            type={type}
            onClick={onClick}
            disabled={disabled}
            $width={width}
            $icon={icon}
            $outline={outline}
            $primary={primary}>
            {icon && <img src={icon} alt="icon" />}
            {content}
        </StyledButton>
    )
);
