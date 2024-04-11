import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Homer Appliances`;
        } else {
            document.title = 'Homer Appliances';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
