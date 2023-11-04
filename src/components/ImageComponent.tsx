import { IParamImage } from "../types";
import "./css/image.css";

const ImageComponent = (params: IParamImage) => {
    const { data, selectedImage, setSelectedImage } = params;
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
            className={`h-full w-full border-2 rounded-lg group overflow-hidden  ${selectedImage?.includes(data.id) ? "image-selected" : "image-parent"}`}
        >
            <img src={data.url} className="w-full h-auto object-cover" alt="Your Alt Text" />
            <input
                onClick={() => handleSelect(data.id)}
                className={`z-10 absolute top-4 left-4 w-5 h-5   ${selectedImage?.includes(data.id) ? "block" : "hidden"} group-hover:block `}
                type="checkbox" defaultChecked={selectedImage?.includes(data.id)} />


        </div>


    );
};

export default ImageComponent;