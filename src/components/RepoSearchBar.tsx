import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const RepoSearchBar = ({ resetSearch }: { resetSearch: boolean }) => {
  const [query, setQuery] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (query) {
      navigate(`/${params.username}/repos?q=${query}`, { replace: true });
    } else {
      navigate(`/${params.username}/repos`, { replace: true });
    }
  };
  useEffect(() => {
    navigate(`/${params.username}/repos`, { replace: true });
    setQuery("");
  }, [resetSearch]);
  return (
    <div className="py-6">
      <form
        onSubmit={onSubmit}
        className="flex flex-col md:space-y-0 space-y-4 md:flex-row md:space-x-2 mb-4 "
      >
        <input
          type="text"
          className="rounded border-2 placeholder-gray-400 px-3 py-1 w-4/5"
          placeholder="Find a repository..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <div className="flex flex-row space-x-2 text-sm">
          <button type="button" className="dropdown-button">
            <p>Type</p>
            <IoIosArrowDown />
          </button>
          <button type="button" className="dropdown-button">
            <p>Language</p>
            <IoIosArrowDown />
          </button>
          <button type="button" className="dropdown-button">
            <p>Sort</p>
            <IoIosArrowDown />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RepoSearchBar;
