import { ChangeEvent, useRef, useState, } from 'react';
import UploadImageSvg from './svg/UploadImageSvg';

const UploadImage = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imagesData, setImagesData] = useState<string | null>();


    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Click the hidden file input when the styled part is clicked
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0];
        setImagesData(selectedFile?.name)

    };
    return (

        <div
            style={{

                zIndex: 0,
                position: "absolute",
                width: "214px",
                opacity: 1,
                height: "230px",
                boxSizing: "border-box",
                transform: "translate3d(670px, 510px, 0px) scale(1)",

            }}
        // className='absolute w-[234px] h-[200px] z-0'
        >
            <label
                className={`border-dashed border-4 rounded-lg cursor-pointer hover:border-sky-200 flex items-center justify-center flex-col h-full gap-y-1`}
                onClick={handleUploadClick}
            >
                <UploadImageSvg />
                <p>{imagesData}</p>
                <h1 className='font-medium '>Add Images</h1>
            </label>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default UploadImage;