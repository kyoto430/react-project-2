import React from 'react'

const Photo = (props) => {
  const { photo } = props
  return (
    <>
      <div>
        <div>
          <img src={photo.path} alt={photo.title} />
        </div>
        <h4 className="text-white d-flex align-items-center justify-content-center">
          {photo.title}
        </h4>
      </div>
    </>
  )
}

export default Photo
