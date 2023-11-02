import React from 'react';
import ImageComponent from './ImageComponent';
import { Image } from '../types';
import { useDrop } from 'react-dnd';
import UploadImage from './UploadImage';
type IParamImage = {
    setSelectedImage: React.Dispatch<React.SetStateAction<number[]>>;
    selectedImage: number[];
    setAllImages: React.Dispatch<React.SetStateAction<Image[]>>;
    allImages: Image[];

}
const AllImages = (props: IParamImage) => {
    const { allImages, setSelectedImage, selectedImage } = props;

    const handleDrop = (droppedItem: Image) => {
        console.log("droppedItem", droppedItem)
    };
    // DND - drop - hook implement
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "ImageComponent",
        drop: (droppedItem: Image) => handleDrop(droppedItem),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    console.log(drop)
    return (
        <section
            ref={drop}
            style={{
                border: isOver ? "1px solid red" : "",
            }}
            className='p-4 grid grid-cols-5 gap-4'>
            {
                allImages.map((url, idx) => <ImageComponent setSelectedImage={setSelectedImage} selectedImage={selectedImage} key={idx} index={idx} data={url} />)
            }
            <UploadImage />
        </section>
    );
};

export default AllImages;