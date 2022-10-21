import { Octokit } from "@octokit/rest";
import { useCallback, useState, useEffect } from "react";
import { Endpoints } from "@octokit/types";
import { useParams, redirect, useNavigate } from 'react-router-dom';



type listUserReposResponse = Endpoints["GET /users/{username}/repos"]["response"]["data"];
type userResponse = Endpoints["GET /users/{username}"]["response"]["data"];

const useOctokit = () => {
    const [repos, setRepos] = useState<listUserReposResponse>([]);
    const [user, setUser] = useState<userResponse>({} as userResponse);
    const params = useParams();
    const navigate = useNavigate();
    const octokit = new Octokit({
        auth: process.env.REACT_APP_GH_TOKEN
      });
    
  const getUserRepos= useCallback(async (username: string) => {
    
      await octokit.request('GET /users/{username}/repos', {
          username: username
      }).then(res => setRepos(res.data))
          .catch(err =>  navigate("/"));
  }, [])
    
    const getUserData =  useCallback(async (username: string) => {
         await octokit.request('GET /users/{username}', {
            username: username
         }).then(res=> setUser(res.data))
            .catch(err => navigate("/"));
        
      }, [user])
    
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