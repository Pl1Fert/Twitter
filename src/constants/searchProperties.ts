import { DbCollections } from "@/constants";

export enum SearchPaths {
    "/feed" = DbCollections.users,
    "/profile" = DbCollections.tweets,
}

export enum SearchFields {
    users = "name",
    tweets = "text",
}
