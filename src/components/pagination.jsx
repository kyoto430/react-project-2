import React from 'react'
import { pagesArray } from '../utils/paginate'

const Pagination = (props) => {
  const { photosCount, pageSize, onPageChange, currentPage } = props
  const pageCount = Math.ceil(photosCount / pageSize)
  if (pageCount === 1) return null
  console.log({ currentPage })
  console.log('pages', pageCount)
  const arrayPages = pagesArray(pageCount)
  return (
    <>
      <nav>
        <ul className="pagination">
          {arrayPages.map((page) => (
            <li
              key={page}
              className={'page-item ' + (page === currentPage ? 'active' : '')}
            >
              <a
                className="page-link bg-dark text-white m-1"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Pagination
