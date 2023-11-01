type ISelectedImage = {
    selectedImage: number[];
    handleDelete: () => void;
}
const Header = (params: ISelectedImage) => {
    const { selectedImage, handleDelete } = params;
    return (
        <header className='flex justify-between border-b py-4 border-[#ccc]  px-4'>
            {/* <h1 className="text-xl font-bold">Gallery</h1> */}
            <h1 className="text-xl font-bold">
                {selectedImage.length} {selectedImage.length > 1 ? "Files" : "File"} selected
            </h1>
            <button onClick={handleDelete} className='text-red-600 font-semibold hover:border-b border-red-600'>Delete files</button>
        </header>
    );
};

export default Header;