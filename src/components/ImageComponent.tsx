import "./image.css"
type IParamImage = {
    data: {
        id: number;
        url: string;
    };
    index: number;
    setSelectedImage: React.Dispatch<React.SetStateAction<number[]>>;
    selectedImage: number[];

}
const ImageComponent = (params: IParamImage) => {
    const { data, index, selectedImage, setSelectedImage } = params;

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
        <div className={`border-2 rounded-lg overflow-hidden  ${index === 0 ? "col-span-2 row-span-2" : ""}  
        ${selectedImage?.includes(data.id) ? "image-selected" : "image-parent"} `}
        >
            <img src={data.url} className="w-full h-auto" alt="Your Alt Text" />
            <input
                onClick={() => handleSelect(data.id)}
                className="z-10 absolute top-4 left-4 w-5 h-5 " type="checkbox" checked={selectedImage?.includes(data.id)} />
        </div>

    );
};

export default ImageComponent;