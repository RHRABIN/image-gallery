import { useState, useEffect } from 'react';
import './App.css'
import importAllImages from './utils/imageLoader';
import Header from './components/Header';
import { Image } from './types';
import AllImages from './components/AllImages';

function App() {
  const [selectedImage, setSelectedImage] = useState<number[]>([]);
  const [allImages, setAllImages] = useState<Image[]>([]);
  const images = importAllImages();

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
    <main className='bg-white rounded-lg  '>
      {/* title */}

      <Header handleDelete={handleDelete} selectedImage={selectedImage} />
      {allImages?.length > 0 && <AllImages allImages={allImages} selectedImage={selectedImage} setAllImages={setAllImages} setSelectedImage={setSelectedImage} />}
    </main>
  )
}

export default App
