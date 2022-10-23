import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="container mx-auto p-6 text-white">
    <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0 md:text-xl">Built with 💗 by Asma</p>

        <div className="flex -mx-6">
                  <a href="#" className="mx-3 hover:opacity-80 duration-150 flex flex-row space-x-2 items-center">
                      <BsGithub />
                      <p> GitHub Repository</p>
                     </a> 
        </div>
    </div>
</footer>
  )
}

export default Footer