import activeBookmarksIcon from "@/assets/icons/bookmark-bold.svg";
import bookmarksIcon from "@/assets/icons/bookmark-outline.svg";
import exploreIcon from "@/assets/icons/explore.svg";
import activeExporeIcon from "@/assets/icons/explore-bold.svg";
import activeHomeIcon from "@/assets/icons/home-fill.svg";
import homeIcon from "@/assets/icons/home-outline.svg";
import activeListsIcon from "@/assets/icons/lists-bold.svg";
import listsIcon from "@/assets/icons/lists-outline.svg";
import activeMessagesIcon from "@/assets/icons/messages-bold.svg";
import messagesIcon from "@/assets/icons/messages-outline.svg";
import moreIcon from "@/assets/icons/more.svg";
import activeNotificationsIcon from "@/assets/icons/notification-fill.svg";
import notificationsIcon from "@/assets/icons/notification-outline.svg";
import activeProfileIcon from "@/assets/icons/profile-fill.svg";
import profileIcon from "@/assets/icons/profile-outline.svg";
import { AppRoutes } from "@/constants";

export const NAV_LINKS = [
    {
        id: 1,
        title: "Home",
        to: AppRoutes.FEED,
        icon: homeIcon,
        activeIcon: activeHomeIcon,
    },
    {
        id: 2,
        title: "Explore",
        to: "#",
        icon: exploreIcon,
        activeIcon: activeExporeIcon,
    },
    {
        id: 3,
        title: "Notifications",
        to: "#",
        icon: notificationsIcon,
        activeIcon: activeNotificationsIcon,
    },
    {
        id: 4,
        title: "Messages",
        to: "#",
        icon: messagesIcon,
        activeIcon: activeMessagesIcon,
    },
    {
        id: 5,
        title: "Bookmarks",
        to: "#",
        icon: bookmarksIcon,
        activeIcon: activeBookmarksIcon,
    },
    {
        id: 6,
        title: "lists",
        to: "#",
        icon: listsIcon,
        activeIcon: activeListsIcon,
    },
    {
        id: 7,
        title: "Profile",
        to: AppRoutes.PROFILE,
        icon: profileIcon,
        activeIcon: activeProfileIcon,
    },
    {
        id: 8,
        title: "More",
        to: "#",
        icon: moreIcon,
        activeIcon: moreIcon,
    },
];
