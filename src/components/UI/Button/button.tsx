import { memo } from "react";

import { IButtonProps } from "./button.interfaces";
import { StyledButton } from "./button.styled";

export const Button = memo<IButtonProps>(
    ({ width, icon, content, outline, primary, onClick, type }) => (
        <StyledButton
            type={type}
            onClick={onClick}
            $width={width}
            $icon={icon}
            $outline={outline}
            $primary={primary}>
            {icon && <img src={icon} alt="icon" />}
            {content}
        </StyledButton>
    )
);
