import { Octokit } from "@octokit/rest";
import { useCallback, useState, useEffect } from "react";
import { Endpoints } from "@octokit/types";
import { useParams } from 'react-router-dom';

type listUserReposResponse = Endpoints["GET /users/{username}/repos"]["response"]["data"];
type userResponse = Endpoints["GET /users/{username}"]["response"]["data"];

const useOctokit = () => {
    const [repos, setRepos] = useState<listUserReposResponse>([]);
    const [user, setUser] = useState<userResponse>();
    const params = useParams();

    const octokit = new Octokit({
        auth: process.env.REACT_APP_GH_TOKEN
      });
    
  const getUserRepos= useCallback(async (username: string) => {
    const {data} = await octokit.request('GET /users/{username}/repos', {
      username: username
    })
      setRepos(data);
  }, [])
    
    const getUserData =  useCallback(async (username: string) => {
        const {data} = await octokit.request('GET /users/{username}', {
          username: username
        })
        setUser(data);
        console.log(data);
        
      }, [])
    
  useEffect(() => {
      getUserRepos(params.username!);
      getUserData(params.username!);
  }, [getUserRepos, getUserData])
    
    return {
        repos,
        user
    }
}

export default useOctokit
export type {
    listUserReposResponse,
    userResponse
  };