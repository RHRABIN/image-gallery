import { useState, useEffect } from 'react';

const useBoxesPerRow = () => {
    const [boxesPerRow, setBoxesPerRow] = useState({
        boxesPerRow: 4,
        rowHeight: 250,
    });

    useEffect(() => {
        const updateBoxesPerRow = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1280) {
                setBoxesPerRow({
                    boxesPerRow: 4,
                    rowHeight: 250
                });
            } else if (screenWidth >= 1024) {
                setBoxesPerRow({
                    boxesPerRow: 3,
                    rowHeight: 250
                });
            }
            else if (screenWidth >= 480) {
                setBoxesPerRow({
                    boxesPerRow: 2,
                    rowHeight: 200
                });
            } else {
                setBoxesPerRow({
                    boxesPerRow: 2,
                    rowHeight: 200
                });
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
