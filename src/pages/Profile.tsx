import Repo from "../components/Repo";
import User from "../components/User";
import useOctokit from "../hooks/useOctokit";

const Profile = () => {
  const {repos, user} = useOctokit()
  return (
    <div className="flex flex-row space-x-4 justify-around mx-auto w-4/5">
       <User user={user!} />
        <div className="divide-y-2 w-4/5">
          {repos.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
      </div>
      </div>
  )
}
export default Profile