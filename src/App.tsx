import { useState, useEffect } from 'react';
import './App.css'
import importAllImages from './utils/imageLoader';
import Header from './components/Header';
import AllImages from './components/AllImages';
import { ItemsType } from './types';

function App() {
  const [selectedImage, setSelectedImage] = useState<number[]>([]);
  // load the initial data
  const images = importAllImages();
  //set initial data
  const [allImages, setAllImages] = useState<ItemsType>({
    left: [],
    right: images,
  });

  useEffect(() => {
    if (images) {
      setAllImages({ left: [], right: images })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // delete selected images 
  const handleDelete = () => {
    const resultLeftArray = allImages.left.filter(item => !selectedImage.includes(item.id));
    const resultRightArray = allImages.right.filter(item => !selectedImage.includes(item.id));
    setAllImages({
      left: resultLeftArray,
      right: resultRightArray
    })
    setSelectedImage([])
  };


  return (
    <main className='bg-white rounded-lg  '>
      {/* title */}
      <Header handleDelete={handleDelete} selectedImage={selectedImage} />
      {/* all images grid */}
      {allImages?.right.length > 0 && <AllImages allImages={allImages} selectedImage={selectedImage} setAllImages={setAllImages} setSelectedImage={setSelectedImage} />}
    </main>
  )
}

export default App
