import Repo from "../components/Repo";
import useOctokit from "../hooks/useOctokit";

const Profile = () => {
  const {repos, user} = useOctokit()
    return (
        <div>
          {repos.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </div>
  )
}

export default Profile