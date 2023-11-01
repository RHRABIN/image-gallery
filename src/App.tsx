import './App.css'

function App() {
  const selectedFile = [1, 2];
  return (
    <main className='bg-white rounded-lg h-[40vh]'>
      {/* title */}
      <div className='flex justify-between border-b py-4 border-[#ccc]  px-4'>
        {/* <h1 className="text-xl font-bold">Gallery</h1> */}
        <h1 className="text-xl font-bold">
          {selectedFile.length > 1 ? "Files" : "File"} selected
        </h1>
        <button className='text-red-600 font-semibold hover:border-b border-red-600'>Delete files</button>
      </div>
      <div className='p-4'>
        main
      </div>
    </main>
  )
}

export default App
