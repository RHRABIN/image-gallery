import { move, swap } from 'react-grid-dnd';
import { ItemsType } from '../types';

export function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number,
    targetId: string | undefined,
    items: ItemsType,
    setAllImages: React.Dispatch<React.SetStateAction<ItemsType>>
) {
    if (targetId === 'left') {
        if (items.left.length === 1) {
            // const rightItem = items.right[0];
            // const leftItem = items.left[sourceIndex];
            const leftItem = items.left[0];
            const rightItem = items.right[sourceIndex];
            setAllImages({
                right: [
                    ...items.right.slice(0, sourceIndex),
                    leftItem,
                    ...items.right.slice(sourceIndex + 1),
                ],
                left: [rightItem],
            });
        } else {
            const result = move(
                items[sourceId as keyof ItemsType],
                items[targetId as keyof ItemsType],
                sourceIndex,
                targetIndex
            );

            setAllImages({
                right: result[0],
                left: result[1],
            });
        }
    }
    else if (targetId === "right") {
        const leftItem = items.left[0];
        const rightItem = items.right[sourceIndex];
        setAllImages({
            right: [
                ...items.right.slice(0, sourceIndex),
                leftItem,
                ...items.right.slice(sourceIndex + 1),
            ],
            left: [rightItem],
        });
    }
    else {
        const result = swap(items[sourceId as keyof ItemsType], sourceIndex, targetIndex);
        setAllImages({
            ...items,
            [sourceId]: result,
        });
    }
}
