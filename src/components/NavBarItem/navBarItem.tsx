import { memo } from "react";
import { useMatch } from "react-router-dom";

import { useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";

import { NavBarItemProps } from "./navBarItem.interfaces";
import { StyledLink } from "./navBarItem.styled";

export const NavBarItem = memo<NavBarItemProps>(({ link: { title, to, icon, activeIcon } }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });
    const { id } = useAppSelector(userSelector);

    let dest = to;
    if (dest === "/profile") {
        dest += `/${id}`;
    }

    return (
        <li>
            <StyledLink to={dest} $active={match}>
                <img src={match ? activeIcon : icon} alt={title} />
                {title}
            </StyledLink>
        </li>
    );
});
