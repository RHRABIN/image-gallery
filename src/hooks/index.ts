import { useDrag } from "react-dnd";
import { ItemTypes } from "../types";

const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
    })
}))