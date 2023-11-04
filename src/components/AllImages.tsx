
import { GridContextProvider, GridDropZone, GridItem } from 'react-grid-dnd';
import "../App.css";
import ImageComponent from './ImageComponent';
import { onChange } from '../utils/handleOnChange';
import { AllImagesProps } from '../types';

const AllImages = (props: AllImagesProps) => {
    const { allImages, selectedImage, setAllImages, setSelectedImage } = props;
    const handleOnChange = (
        sourceId: string,
        sourceIndex: number,
        targetIndex: number,
        targetId?: string | undefined
    ) => {
        onChange(sourceId, sourceIndex, targetIndex, targetId, allImages, setAllImages);
    };
    return (
        <GridContextProvider onChange={handleOnChange}>
            <div className="flex w-full h-[90vh] ">
                <GridDropZone
                    className=" w-[300px] h-[300px] border m-2"
                    id="right"
                    boxesPerRow={1}
                    rowHeight={300}
                >
                    {allImages.right.map((item, index) => (
                        <GridItem key={item.id}>
                            <ImageComponent data={item} index={index} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                        </GridItem>
                    ))}
                </GridDropZone>
                <GridDropZone
                    className="flex-[1]  m-2"
                    id="left"
                    boxesPerRow={4}
                    rowHeight={250}
                >
                    {allImages.left.map((item, index) => (
                        <GridItem className='p-2' key={item.id}>
                            <ImageComponent data={item} index={index} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                        </GridItem>
                    ))}
                </GridDropZone>

            </div>
        </GridContextProvider>
    );
}


export default AllImages;
