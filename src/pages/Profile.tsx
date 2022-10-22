import Repo from "../components/Repo";
import RepoSearchBar from "../components/RepoSearchBar";
import User from "../components/User";
import useOctokit from "../hooks/useOctokit";
import { FiBookOpen, FiPackage } from 'react-icons/fi';
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
const Profile = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const [query, setQuery] = useState<string>(queryParams.get("q")!);
  useEffect(() => {
    setQuery(queryParams.get("q")!)
   
  })
  const { repos, user, searchedRepos } = useOctokit({ query: query })
  
  return (
    <div className="mx-auto w-4/5 mt-20 divide-y-2">
      <div className="w-6/12 mx-auto flex flex-row space-x-2">
        <button disabled type="button" className="button">
        <FiBookOpen />
          <p>Overview</p>  
        </button>
        <div className="border-b-2 border-amber-600">
        <button type="button" className="button font-bold">
          <RiGitRepositoryLine />
            <p >Repositories</p>
            <div className="bg-gray-200 text-sm px-2 rounded-xl">{user.public_repos}</div>
          </button>
            </div>
        <button disabled type="button" className="button"><AiOutlineProject />
          <p>Projects</p> </button>
        <button disabled type="button" className="button"><FiPackage />
          <p>Packages</p> </button>
      </div>
    
    <div className="w-full flex flex-row space-x-6 ">
       <User user={user!} />
       <div className="mt-5 divide-y-2 w-full" >
        <RepoSearchBar />
        <div className="divide-y-2 w-full">
            {searchedRepos.length > 0 ?
              (searchedRepos.map((repo) => (
                <Repo key={repo.id} repo={repo} />
              ))) :
              (repos.map((repo) => (
                <Repo key={repo.id} repo={repo} />
              )))
            }
              
            <div className=" justify-center flex flex-row pt-5 mb-10">
            <Pagination />
            </div>
          </div>
          
      </div>
      </div>
      </div>
  )
}
export default Profile