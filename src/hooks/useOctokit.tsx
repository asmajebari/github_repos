import { Octokit } from "@octokit/rest";
import { useCallback, useState, useEffect } from "react";
import { listUserReposResponse } from "../App";
import {useParams} from 'react-router-dom'

const useOctokit = () => {
    const [repos, setRepos] = useState<listUserReposResponse>([]);
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
    
  useEffect(() => {
    getUserRepos(params.username!);
  }, [getUserRepos])
    
    return {
        repos
    }
}

export default useOctokit