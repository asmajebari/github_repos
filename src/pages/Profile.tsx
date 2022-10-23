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
 
  const [query, setQuery] = useState<{ q: string, page: string }>({ q: '', page:''});
  useEffect(() => {
    let queryObj = {q:queryParams.get("q")!, page: queryParams.get("page")!}
    setQuery(queryObj)   
    
  }, [queryParams.get("q"), queryParams.get("page")])
  const { repos, user, searchedRepos } = useOctokit(query)
  
  return (
  
    <div className="mx-auto w-4/5 mt-16 divide-y-2 divide-gray-500">
    <div className=" w-full flex md:flex-row lg:flex-row flex-col space-x-6 ">
       <User user={user!} />
        <div className="mt-5 divide-y-2 divide-gray-500 md:w-full" >
        <div className="flex flex-row md:space-x-2 md:text-base space-x-1 text-sm">
        <button disabled type="button" className="button">
        <FiBookOpen />
          <p>Overview</p>  
        </button>
        <div className="border-b-2 border-amber-600">
        <button type="button" className="button font-bold">
          <RiGitRepositoryLine />
            <p >Repositories</p>
            <div className="bg-gray-500 text-sm px-2 rounded-xl">{user.public_repos}</div>
          </button>
            </div>
        <button disabled type="button" className="button"><AiOutlineProject />
          <p>Projects</p> </button>
        <button disabled type="button" className="button"><FiPackage />
          <p>Packages</p> </button>
      </div>
        <RepoSearchBar />
        <div className="divide-y-2 divide-gray-500 w-full">
            {searchedRepos.length > 0 ?
              (searchedRepos.map((repo) => (
                <Repo key={repo.id} repo={repo} />
              ))) :
              (query.q ? (
                <p className="text-2xl font-bold text-center my-14 text-white">{user.login} doesn't have repositories that match</p>
              ) :
                repos.map((repo) => (
                <Repo key={repo.id} repo={repo} />
                ))
              
              )
            }
             
            
          </div>
          
      </div>
      </div>
      </div>
  )
}
export default Profile