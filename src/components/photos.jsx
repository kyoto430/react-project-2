import React, { useState } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './pagination'
import Photo from './photo'

const Photos = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 1
  const { photos } = props
  const handlePageChange = (pageIndex) => {
    console.log('page:', pageIndex)
    setCurrentPage(pageIndex)
  }
  const photoCrop = paginate(photos, currentPage, pageSize)
  console.log('Массив для рендера', photoCrop)
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {photoCrop.map((newArr) =>
          newArr.map((photo) => <Photo key={photo.id} photo={photo} />)
        )}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          photosCount={photos.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default Photos
