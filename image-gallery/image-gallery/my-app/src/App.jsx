import { useState } from 'react'
import Gallery from './components/Gallery';

import './App.css'
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

function App() {
 const images=[image1,image2,image3,image4,image5];
  return (
    <>
      <div className="app">
      <h1>Photo Gallery</h1>
      <Gallery images={images} />
    </div>
    </>
  )
}

export default App
