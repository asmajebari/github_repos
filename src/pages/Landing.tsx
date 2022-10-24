import UserSearchBar from "../components/UserSearchBar";

const Landing = () => {
  return (
    <div className="flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>
        <h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">
          MVST coding challenge
        </h1>

        <p className="text-base md:text-lg lg:text-2xl mb-8">
          Type a user's username to show their repositories{" "}
        </p>

        <div className="flex flex-col md:flex-row justify-center mb-4">
          <UserSearchBar
            showButton={true}
            buttonClass="bg-gray-600 md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
            className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
          />
        </div>

        <div className="opacity-75 italic">
          You can check out the challenge code in the link below!
        </div>
      </main>
    </div>
  );
};

export default Landing;
