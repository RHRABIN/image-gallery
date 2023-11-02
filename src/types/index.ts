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