import { useState, useEffect } from 'react';
import './App.css'
import ImageComponent from './components/ImageComponent';
import importAllImages from './utils/imageLoader';
import Header from './components/Header';
import UploadImage from './components/UploadImage';

type Image = {
  id: number;
  url: string;
}
function App() {
  const [selectedImage, setSelectedImage] = useState<number[]>([]);
  const [allImages, setAllImages] = useState<Image[]>([]); const images = importAllImages();

  useEffect(() => {
    if (images) {
      setAllImages(images)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = () => {
    const resultArray = allImages.filter(item => !selectedImage.includes(item.id));
    setAllImages(resultArray)
    setSelectedImage([])
  };

  return (
    <main className='bg-white rounded-lg '>
      {/* title */}
      <Header handleDelete={handleDelete} selectedImage={selectedImage} />
      <div className='p-4 grid grid-cols-5 gap-4'>
        {
          allImages.map((url, idx) => <ImageComponent setSelectedImage={setSelectedImage} selectedImage={selectedImage} key={idx} index={idx} data={url} />)
        }
        <UploadImage />
      </div>
    </main>
  )
}

export default App
