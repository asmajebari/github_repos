import UserSearchBar from "./UserSearchBar";

const Header = () => {
  return (
    <div>
      <nav className="w-full bg-gray-900 text-white px-4 py-3 border-b-1 border-white shadow-xl">
        <UserSearchBar
          showButton={false}
          className="ml-auto rounded bg-gray-700 placeholder-gray-400 px-3 py-1"
        />
      </nav>
    </div>
  );
};

export default Header;
