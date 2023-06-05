export default function Navbar() {
  return (
    <div className="flex flex-row items-center bg-gray-900 py-5 gap-8">
      <div className="w-1/3 border-white border">
        <h1 className="text-white ml-8 font-bold text-3xl cursor-default select-none">
          GameX
        </h1>
      </div>

      <div className="flex flex-row mt-1 gap-3 justify-start w-2/3 border border-white">
        <div className="hover:bg-white cursor-pointer rounded-md transition ease-in-out duration-300">
          <h1 className="text-white hover:text-black hover:font-bold px-2 py-1 text-xl select-none">
            HOME
          </h1>
        </div>
        <div className="hover:bg-white cursor-pointer rounded-md transition ease-in-out duration-300">
          <h1 className="text-white hover:text-black hover:font-bold px-2 py-1 text-xl select-none">
            LOGIN
          </h1>
        </div>
        <div className="hover:bg-white cursor-pointer rounded-md transition ease-in-out duration-300">
          <h1 className="text-white hover:text-black hover:font-bold px-2 py-1 text-xl select-none">
            SIGN UP
          </h1>
        </div>
        <div className="hover:bg-white cursor-pointer rounded-md transition ease-in-out duration-300">
          <h1 className="text-white hover:text-black hover:font-bold px-2 py-1 text-xl select-none">
            My Notes
          </h1>
        </div>
        <div className="hover:bg-white cursor-pointer rounded-md transition ease-in-out duration-300">
          <h1 className="text-white hover:text-black hover:font-bold px-2 py-1 text-xl select-none">
            Watchlist
          </h1>
        </div>
      </div>
    </div>
  );
}
