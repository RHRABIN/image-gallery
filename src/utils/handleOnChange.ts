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
    if (targetId === 'right') {
        if (items.right.length === 1) {
            const rightItem = items.right[0];
            const leftItem = items.left[sourceIndex];
            setAllImages({
                left: [
                    ...items.left.slice(0, sourceIndex),
                    rightItem,
                    ...items.left.slice(sourceIndex + 1),
                ],
                right: [leftItem],
            });
        } else {
            const result = move(
                items[sourceId as keyof ItemsType],
                items[targetId as keyof ItemsType],
                sourceIndex,
                targetIndex
            );
            setAllImages({
                left: result[0],
                right: result[1],
            });
        }
    } else {
        const result = swap(items[sourceId as keyof ItemsType], sourceIndex, targetIndex);
        setAllImages({
            ...items,
            [sourceId]: result,
        });
    }
}
