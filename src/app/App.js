import React, { useState } from 'react'
import Photos from '../components/photos'
import PhotoTitle from '../components/photoTitile'
import { photosList } from './photosList'
import '../styles/App.css'

const App = () => {
  const [photos, setPhotos] = useState(photosList)
  const [title, setTitle] = useState('')
  const [path, setPath] = useState('')
  const addNewCard = (e) => {
    e.preventDefault()
    const newCard = {
      id: Date.now(),
      title,
      path,
    }
    setPhotos([...photos, newCard])
    setTitle('')
    setPath('')
  }
  return (
    <>
      <div className="App">
        <form>
          <input
            className="border border-primary m-2 p-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Название"
          />
          <input
            className="border border-primary m-2 p-1"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            type="text"
            placeholder="Ссылка"
          />
          <button className="btn btn-primary m-2" onClick={addNewCard}>
            Добавить
          </button>
        </form>
        <PhotoTitle />
        <Photos photos={photos} />
      </div>
    </>
  )
}

export default App
