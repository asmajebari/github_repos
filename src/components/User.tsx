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
      <div className="flex flex-col md:w-3/12 lg:w-3/12 w-10/12 mx-auto text-gray-400 md:mt-4 mb-4">
          <div className='flex flex-row md:flex-col md:space-x-0 space-x-6 md:items-start items-center'>
              <img src={user.avatar_url} alt="avatar" className="md:w-fit md:h-fit w-2/5 h-2/5 border-2 rounded-full justify-self-center mb-4" />
              <div >
          <p className="font-semibold text-xl">{user.name}</p>
              <p className="text-lg text-gray-500">{user.login}</p>
              </div>
              </div>
          <button className="text-gray-400 border-gray-400 hover:border-gray-300 hover:text-gray-300 rounded-md border-2 md:px-3 md:py-1 items-center my-4
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