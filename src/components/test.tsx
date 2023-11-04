import { useState } from 'react';
import { IParamAllImages, ItemType } from '../types';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import "../App.css";
import ImageComponent from './ImageComponent';

const AllImages = (props: IParamAllImages) => {
    const { allImages, selectedImage, setSelectedImage } = props;
    const [items, setItems] = useState<ItemType>({ imagesData: allImages });

    // handle on change
    function onChange(sourceId: string, sourceIndex: number, targetIndex: number) {
        if (sourceId in items) {
            const result = swap(items[sourceId], sourceIndex, targetIndex);
            setItems({
                ...items,
                [sourceId]: result
            });
        }
    }

    return (
        <>

            <GridContextProvider onChange={onChange}>
                <GridDropZone
                    className=" h-[100vh]"
                    id="imagesData"
                    boxesPerRow={5}
                    rowHeight={240}
                >
                    {items.imagesData.map((item, index) => {

                        return (
                            <GridItem
                                className='p-1'
                                key={item.id} >
                                <ImageComponent data={item} index={index} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                            </GridItem>
                        )
                    })}
                </GridDropZone>
            </GridContextProvider>

        </>
    );
};

export default AllImages;
