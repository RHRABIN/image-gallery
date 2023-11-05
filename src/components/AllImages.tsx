
import { GridContextProvider, GridDropZone, GridItem } from 'react-grid-dnd';
import "../App.css";
import ImageComponent from './ImageComponent';
import { handleOnChange } from '../utils/handleOnChange';
import { AllImagesProps } from '../types';
import useBoxesPerRow from '../hooks/useBoxesPerRow';
import UploadImage from './UploadImage';

const AllImages = (props: AllImagesProps) => {
    const { allImages, selectedImage, setAllImages, setSelectedImage } = props;
    // responsive items hooks
    const itemsPerRow = useBoxesPerRow();
    // handle change function
    const onChange = (
        sourceId: string,
        sourceIndex: number,
        targetIndex: number,
        targetId?: string | undefined,
    ) => {
        handleOnChange(sourceId, sourceIndex, targetIndex, targetId, allImages, setAllImages);
    };
    return (
        <GridContextProvider onChange={onChange}>
            <div className="block sm:flex w-full h-[100vh]">
                {/* left grid big image */}
                <GridDropZone
                    className=" w-[400px]  md:w-[300px] h-[300px] border m-2"
                    id="left"
                    boxesPerRow={1}
                    rowHeight={300}
                >
                    {allImages.left.map((item, index) => (
                        <GridItem key={item.id}>
                            <ImageComponent data={item} index={index} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                        </GridItem>
                    ))}
                </GridDropZone>
                {/* right grid images */}
                <GridDropZone
                    className="flex-[1]  m-2 h-full"
                    id="right"
                    boxesPerRow={itemsPerRow.boxesPerRow}
                    rowHeight={itemsPerRow.rowHeight}
                >
                    {allImages.right.map((item, index) => (
                        item.url != "" ? <GridItem className='p-2' key={item.id}>
                            <ImageComponent data={item} index={index} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                        </GridItem> : <UploadImage />
                    ))}


                </GridDropZone>
            </div>
        </GridContextProvider>
    );
}


export default AllImages;
