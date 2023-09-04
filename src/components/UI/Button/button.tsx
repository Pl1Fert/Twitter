import { memo } from "react";

import { ITransparentButtonProps } from "./button.interfaces";
import { StyledButton } from "./button.styled";

export const Button = memo<ITransparentButtonProps>(
    ({ width, icon, content, outline, primary, onClick }) => (
        <StyledButton
            type="button"
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
