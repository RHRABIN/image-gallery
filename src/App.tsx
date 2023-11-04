import { useState, useEffect } from 'react';
import './App.css'
import importAllImages from './utils/imageLoader';
import Header from './components/Header';
import AllImages from './components/AllImages';
import { ItemsType } from './types';

function App() {
  const [selectedImage, setSelectedImage] = useState<number[]>([]);
  const images = importAllImages();
  const [allImages, setAllImages] = useState<ItemsType>({
    left: images,
    right: [],
  });

  useEffect(() => {
    if (images) {
      setAllImages({ left: images, right: [] })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = () => {
    // const resultArray = allImages.left.filter(item => !selectedImage.includes(item.id));
    // setAllImages(resultArray)
    setSelectedImage([])
  };


  return (
    <main className='bg-white rounded-lg  '>
      {/* title */}
      <Header handleDelete={handleDelete} selectedImage={selectedImage} />
      {allImages?.left.length > 0 && <AllImages allImages={allImages} selectedImage={selectedImage} setAllImages={setAllImages} setSelectedImage={setSelectedImage} />}
    </main>
  )
}

export default App
