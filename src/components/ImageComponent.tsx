type IParamImage = {
    url: string;
    index: number;
}
const ImageComponent = (params: IParamImage) => {
    return (
        <div className={`border-2 hover:bg-[#ccc] rounded-lg overflow-hidden ${params.index == 0 && "col-span-2 row-span-2"}`}>
            <img src={params.url} className="hover:opacity-5" />
        </div>
    );
};

export default ImageComponent;