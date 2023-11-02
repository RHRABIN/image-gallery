import { IParamImage } from "../types";
import "./css/image.css";
import { useDrag } from 'react-dnd'


const ImageComponent = (params: IParamImage) => {
    const { data, index, selectedImage, setSelectedImage } = params;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "ImageComponent",
        item: { id: data.id, url: data.url },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const handleSelect = (id: number) => {
        const isExist = selectedImage?.includes(id);

        if (isExist) {
            // If the ID exists, filter it out (remove from the array)
            setSelectedImage(prev => prev.filter(i => i !== id));
        } else {
            // If the ID doesn't exist, add it to the array
            setSelectedImage(prev => [...prev, id]);

        }
    };

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "move"
            }}

            className={`border-2 rounded-lg group overflow-hidden  ${index === 0 ? "col-span-2 row-span-2" : ""}  
        ${selectedImage?.includes(data.id) ? "image-selected" : "image-parent"} `}
        >
            <img src={data.url} className="w-full h-auto" alt="Your Alt Text" />
            <input
                onClick={() => handleSelect(data.id)}
                className={`z-10 absolute top-4 left-4 w-5 h-5 leading-tight  ${selectedImage?.includes(data.id) ? "block" : "hidden"} group-hover:block `}
                type="checkbox" checked={selectedImage?.includes(data.id)} />
        </div>

    );
};

export default ImageComponent;