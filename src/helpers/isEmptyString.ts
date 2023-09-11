export const isEmptyString = (string: string): boolean => {
    if (!string.trim()) {
        return true;
    }

    return false;
};
