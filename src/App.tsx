import { ChangeEvent, useRef } from 'react';
import './App.css'
import ImageComponent from './components/ImageComponent';
import UploadImageSvg from './components/svg/UploadImageSvg';
import importAllImages from './utils/imageLoader';

function App() {
  const selectedFile = [1, 2];
  const images = importAllImages();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Click the hidden file input when the styled part is clicked
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    // Handle the selected file, for instance, you might want to upload it
    console.log(selectedFile);
  };

  return (
    <main className='bg-white rounded-lg '>
      {/* title */}
      <div className='flex justify-between border-b py-4 border-[#ccc]  px-4'>
        {/* <h1 className="text-xl font-bold">Gallery</h1> */}
        <h1 className="text-xl font-bold">
          {selectedFile.length > 1 ? "Files" : "File"} selected
        </h1>
        <button className='text-red-600 font-semibold hover:border-b border-red-600'>Delete files</button>
      </div>
      <div className='p-4 grid grid-cols-5 gap-4'>
        {
          images.map((url, idx) => <ImageComponent key={idx} index={idx} url={url} />)
        }
        {/* <div className={`border-dashed border-2 rounded-lg cursor-pointer hover:border-sky-200 flex items-center justify-center flex-col`}>
          <UploadImageSvg />
          <h1 className='font-medium'>Add Images</h1>
        </div> */}
        <div>
          <label
            className={`border-dashed border-2 rounded-lg cursor-pointer hover:border-sky-200 flex items-center justify-center flex-col h-full`}
            onClick={handleUploadClick}
          >
            <UploadImageSvg />
            <h1 className='font-medium'>Add Images</h1>
          </label>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </main>
  )
}

export default App
