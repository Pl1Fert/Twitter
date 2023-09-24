import { memo } from "react";
import { useMatch } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";
import { sidebarActions } from "@/store/slices/sidebarSlice";

import { NavBarItemProps } from "./navBarItem.interfaces";
import { ListItem, StyledLink } from "./navBarItem.styled";

export const NavBarItem = memo<NavBarItemProps>(({ link: { title, to, icon, activeIcon } }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });
    const { id } = useAppSelector(userSelector);
    const dispatch = useAppDispatch();

    const dest = to === "/profile" ? `${to}/${id}` : to;

    const closeSidebar = (): void => {
        dispatch(sidebarActions.closeLeft());
    };

    return (
        <ListItem onClick={closeSidebar}>
            <StyledLink to={dest} $active={match}>
                <img src={match ? activeIcon : icon} alt={title} />
                {title}
            </StyledLink>
        </ListItem>
    );
});
