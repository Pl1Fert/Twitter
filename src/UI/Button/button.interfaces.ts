import { ButtonType } from "@/constants";

export interface IButtonProps {
    width?: string;
    icon?: string;
    content: string;
    primary?: boolean;
    outline?: boolean;
    onClick?: () => void;
    type: ButtonType;
    disabled?: boolean;
}
