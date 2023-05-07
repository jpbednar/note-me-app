const LS_NOTES_KEY = 'note-me-app-notes';

export const getNotesFromLocalStorage = () => {
    const notes = localStorage.getItem(LS_NOTES_KEY);
    if (notes) {
        return JSON.parse(notes);
    } else {
        return [];
    }
};

export const setNotesFromLocalStorage = (notes) => {
    localStorage.setItem(LS_NOTES_KEY, JSON.stringify(notes));
};
