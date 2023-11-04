export type IParamImage = {
    data: {
        id: number;
        url: string;
    };
    index: number;
    setSelectedImage: React.Dispatch<React.SetStateAction<number[]>>;
    selectedImage: number[];

}
export type Image = {
    id: number;
    url: string;
}


export type IParamAllImages = {
    setSelectedImage: React.Dispatch<React.SetStateAction<number[]>>;
    selectedImage: number[];
    setAllImages: React.Dispatch<React.SetStateAction<Image[]>>;
    allImages: Image[];

}
export type ItemType = {
    [key: string]: Image[]; // Define the type of the properties here
};