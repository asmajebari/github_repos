import {listUserReposResponse} from '../App'
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
  return (
      <div>
          <h3>{repo.name}</h3>
          <p>{repo.id}</p>
          <p>{repo.forks_count}</p>
          <p>{repo.language}</p>
          <p>{repo.description}</p>
          <p>{repo.stargazers_count}</p>
          <p>{repo.html_url}</p>
          </div>
  )
}

export default Repo