export const isLiked = (likedByUsers: string[], email: string): boolean =>
    likedByUsers.includes(email);
