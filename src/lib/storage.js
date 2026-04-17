export const getStorage = (key) => {
    if (typeof window === 'undefined') return null;
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch {
        return null;
    }
};

export const setStorage = (key, value) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorage = (key) => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
};