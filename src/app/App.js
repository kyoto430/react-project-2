import React, { useState } from 'react'
import Photos from '../components/photos'
import PhotoTitle from '../components/photoTitile'
import { photosList } from './photosList'

const App = () => {
  const [photos, setPhotos] = useState(photosList)
  return (
    <>
      <div className="container-fluid">
        <PhotoTitle />
        <Photos photos={photos} />
      </div>
    </>
  )
}

export default App
