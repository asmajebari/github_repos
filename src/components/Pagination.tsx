import { useEffect, useState } from "react"
import{AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"

const Pagination = () => {
  const queryParams = new URLSearchParams(window.location.search)
  let pageNumber = +queryParams.get("page")!
  const [page, setPage] = useState<number>(pageNumber)
  
  const navigate = useNavigate()
  useEffect(() => {
    if (page != 0){
      if (window.location.pathname.includes('q')) {
        navigate(window.location.pathname+`&page=${page}`)
      } else {
        navigate(window.location.pathname+`?page=${page}`)
      }
    }
    
}, [page])

  return (
    <div className="flex flex-row space-x-2">
      <button onClick={() => { setPage(page-1) }} disabled={page === 1} className="pagination-button">
        <AiOutlineArrowLeft />
      </button>
      <button onClick={() => { setPage(page+1) }} className="pagination-button">
      <AiOutlineArrowRight />
      </button>
</div>
  )
}

export default Pagination