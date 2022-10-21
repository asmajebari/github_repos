import UserSearchBar from "./UserSearchBar"

const Header = () => {
  return (
      <div>
          <nav className="bg-gray-900 text-white px-4 py-3">
              <UserSearchBar showButton={false} className="rounded bg-gray-700 placeholder-gray-400 px-3 py-1" />
          </nav>
          
    </div>
  )
}

export default Header