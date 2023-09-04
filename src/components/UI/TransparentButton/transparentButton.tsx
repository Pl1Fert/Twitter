import { FC } from "react";

import { ITransparentButtonProps } from "./transparentButton.interfaces";
import { Button } from "./transparentButton.styled";

export const TransparentButton: FC<ITransparentButtonProps> = ({
    width,
    icon,
    content,
    borderColor,
}) => (
    <Button $width={width} $borderColor={borderColor} $icon={icon}>
        {icon && <img src={icon} alt="icon" />}
        {content}
    </Button>
);
