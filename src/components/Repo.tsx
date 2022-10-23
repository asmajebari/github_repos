import { useEffect, useState } from 'react';
import { IoIosGitNetwork } from 'react-icons/io'
import { IoStarOutline } from 'react-icons/io5'

type Props = {
    repo: {
        id: number | undefined,
        name: string | undefined,
        description: string | null,
        forks_count?: number | undefined,
        stargazers_count?: number | undefined
        language?: string | null | undefined,
        updated_at?: string | null | undefined,
        html_url: string,
    };
  };
const Repo = ({ repo }: Props) => {
    const [updatedAt, setUpdatedAt] = useState<String>('');

    const setUpdatedTime = (date:string) => {
        const updatedAtDate = new Date(date).toDateString();
        setUpdatedAt(`Updated ${updatedAtDate}`);
        }
        

    useEffect(() => {
        setUpdatedTime(repo.updated_at!);
    }, [])
   
  return (
      <div className="flex flex-row justify-between py-4">
          <div className='space-y-1'>
              <a target="_blank" href={repo.html_url} className="text-lg text-blue-600 font-semibold">{repo.name}</a>
              {repo.description && <p className=" text-gray-400 pb-2">{repo.description}</p>}
              <div className="flex flex-row space-x-4 text-sm text-gray-400">
                  {repo.language && <p>{repo.language}</p>}
                  {repo.forks_count && <div className='flex flex-row items-center space-x-0.5'>
                      <IoIosGitNetwork />
                      <p>{repo.forks_count}</p>
                  </div>}
                {repo.stargazers_count &&  <div className='flex flex-row items-center space-x-0.5'>
                      <IoStarOutline />
                      <p>{repo.stargazers_count}</p></div>
                  }
                 
                  <p>{updatedAt}</p>
              </div>
          </div>
          <div>
              <button className='text-gray-400 text-sm rounded-md border-gray-400 border-2 px-3 py-1 flex flex-row items-center space-x-1 transition hover:scale-110 hover:shadow-xl hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:ring active:text-indigo-500'>
              <IoStarOutline />
                  <p>
                      Star
                  </p></button>
          </div>
          
        </div>
  )
}

export default Repo