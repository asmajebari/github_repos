import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Landing = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const onSubmit = (e:any) => {
      e.preventDefault();
        navigate(`/${username}/repos`, {replace: true});
  }
  return (
    <form onSubmit={onSubmit}>
    <input type="text" placeholder="search username"
      value={username}
      onChange={(e) => {
        setUsername(e.target.value)
      }}
    />
    <button>Search</button>
  </form>
    )
    
    
}

export default Landing