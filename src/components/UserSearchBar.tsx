import { useState } from 'react'
import { useNavigate } from "react-router-dom"
type Props = {
  className: string,
  showButton: boolean
}
const UserSearchBar = ({ className, showButton } : Props ) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const onSubmit = (e:any) => {
      e.preventDefault();
      e.target.reset();
      navigate(`/${username}/repos`, { replace: true });
  }
  return (
    <form onSubmit={onSubmit} >
    <input type="text" className={className} placeholder="Search username..."
      value={username}
      onChange={(e) => {
        setUsername(e.target.value)
      }}
      />
      {showButton && <button>Search</button>}
      
  </form>
  )
}

export default UserSearchBar