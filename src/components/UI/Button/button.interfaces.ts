export interface IButtonProps {
    width?: string;
    icon?: string;
    content: string;
    primary?: boolean;
    outline?: boolean;
    onClick?: () => void;
    type: "button" | "submit";
    disabled?: boolean;
}
