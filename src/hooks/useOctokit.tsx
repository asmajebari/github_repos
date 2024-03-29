import { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Octokit } from "@octokit/rest";
import { Endpoints } from "@octokit/types";

type listUserReposResponse =
  Endpoints["GET /users/{username}/repos"]["response"]["data"];
type userResponse = Endpoints["GET /users/{username}"]["response"]["data"];
type searchedReposResponse =
  Endpoints["GET /search/repositories"]["response"]["data"]["items"];

const useOctokit = (query: { q?: string; page?: string }) => {
  const [repos, setRepos] = useState<listUserReposResponse>([]);
  const [user, setUser] = useState<userResponse>({} as userResponse);
  const [searchedRepos, setSearchedRepos] = useState<searchedReposResponse>([]);
  const params = useParams();
  const navigate = useNavigate();

  const octokit = new Octokit({
    auth: process.env.REACT_APP_GH_TOKEN,
  });

  const getUserRepos = useCallback(async (username: string) => {
    await octokit
      .request("GET /users/{username}/repos", {
        username: username,
        sort: "updated",
      })
      .then((res) => setRepos(res.data))
      .catch((err) => navigate("/"));
  }, []);

  const getUserData = useCallback(async (username: string) => {
    await octokit
      .request("GET /users/{username}", {
        username: username,
      })
      .then((res) => setUser(res.data))
      .catch((err) => navigate("/"));
  }, []);

  useEffect(() => {
    getUserRepos(params.username!);
    getUserData(params.username!);
  }, [params.username]);

  const getSearchedRepos = useCallback(
    async (username: string, repoName: string) => {
      let query = `user:${username}+${repoName} in:name`;
      await octokit
        .request("GET /search/repositories", {
          q: query,
        })
        .then((res) => {
          setSearchedRepos(res.data.items);
        })
        .catch((err) => navigate("/"));
    },
    []
  );

  useEffect(() => {
    if (query.q) {
      getSearchedRepos(params.username!, query.q!);
    } else {
      setSearchedRepos([]);
    }
  }, [query.q]);

  return {
    repos,
    user,
    searchedRepos,
  };
};

export default useOctokit;
export type { listUserReposResponse, userResponse };
