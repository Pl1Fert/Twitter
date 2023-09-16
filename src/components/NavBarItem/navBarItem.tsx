import { memo } from "react";
import { useMatch } from "react-router-dom";

import { NavBarItemProps } from "./navBarItem.interfaces";
import { StyledLink } from "./navBarItem.styled";

export const NavBarItem = memo<NavBarItemProps>(({ link: { title, to, icon, activeIcon } }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <li>
            <StyledLink to={to} $active={match}>
                <img src={match ? activeIcon : icon} alt={title} />
                {title}
            </StyledLink>
        </li>
    );
});
