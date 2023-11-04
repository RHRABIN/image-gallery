import { useState, useEffect } from 'react';

const useBoxesPerRow = () => {
    const [boxesPerRow, setBoxesPerRow] = useState(3);

    useEffect(() => {
        const updateBoxesPerRow = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1280) {
                setBoxesPerRow(4);
            } else if (screenWidth >= 1024) {
                setBoxesPerRow(3);
            }
            else if (screenWidth >= 980) {
                setBoxesPerRow(2);
            } else {
                setBoxesPerRow(1);
            }
        };

        // Initial update
        updateBoxesPerRow();

        // Add an event listener to update boxesPerRow on window resize
        window.addEventListener('resize', updateBoxesPerRow);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('resize', updateBoxesPerRow);
        };
    }, []);

    return boxesPerRow;
};

export default useBoxesPerRow;
