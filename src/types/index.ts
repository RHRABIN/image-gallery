export type IParamImage = {
    data: {
        id: number;
        url: string;
    };
    index: number;
    setSelectedImage: React.Dispatch<React.SetStateAction<number[]>>;
    selectedImage: number[];

}
export type IImage = {
    id: number;
    url: string;
};

export type IParamAllImages = {
    setSelectedImage: React.Dispatch<React.SetStateAction<number[]>>;
    selectedImage: number[];
    setAllImages: React.Dispatch<React.SetStateAction<IImage[]>>;
    allImages: IImage[];

}
export type ItemType = {
    [key: string]: IImage[]; // Define the type of the properties here
};

export type AllImagesProps = {
    allImages: ItemsType;
    selectedImage: number[];
    setAllImages: React.Dispatch<React.SetStateAction<ItemsType>>;
    setSelectedImage: React.Dispatch<React.SetStateAction<number[]>>;
};

export type ItemsType = {
    left: IImage[]; // Define the specific type for left key
    right: IImage[]; // Define the specific type for right key
};