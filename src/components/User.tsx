import {IoIosContacts, IoIosMail} from 'react-icons/io'

type Props = {
    user: {
        id: number | undefined,
        name: string | null | undefined,
        login:string|undefined,
        avatar_url: string,
        email: string | null,
        followers: number | undefined,
        following: number | undefined,
        bio: string | null
    };
  };

const User = ({ user }: Props) => {
  return (
      <div className="flex flex-col w-3/12 text-gray-700">
          <img src={user.avatar_url} alt="avatar" className="w-fit h-fit border-2 rounded-full justify-self-center mb-4"/>
          <p className="font-semibold text-xl">{user.name}</p>
          <p className="text-lg text-gray-500">{user.login}</p>
          <button className="rounded-md border-2 px-3 py-1 items-center my-4
          transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
          >Follow</button>
          <p >{user.bio}</p>
          <div className='flex flex-row items-center space-x-1 my-2'>
              <IoIosContacts />
              <div className='text-sm flex flex-row space-x-1'>
                  <p className='font-semibold mr-1'>{user.followers}</p>
                  Followers</div>
              <div className='text-sm mb-2'>.</div>
              <div className='text-sm flex flex-row'>
                  <p className='font-semibold mr-1'>
                      {user.following}</p> Following</div>

          </div>
          {user.email && <div className='flex flex-row items-center space-x-1'>
              <IoIosMail />
              <p>{user.email}</p>
          </div>}
          
      </div>
  )
}

export default User