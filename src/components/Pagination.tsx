import { useState } from "react"
import{AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const Pagination = () => {
  const [page, setPage] = useState<number>(1)
  return (
    <div className="flex flex-row space-x-2">
      <button className="pagination-button">
        <AiOutlineArrowLeft />
      </button>
      <button className="pagination-button">
      <AiOutlineArrowRight />
      </button>
</div>
  )
}

export default Pagination