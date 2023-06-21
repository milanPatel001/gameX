export default function Signup() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="h-96 w-96 rounded-xl border border-black p-2 pt-4 shadow-xl">
        <form onSubmit={handleSubmission}>
          <div className="mt-20 flex flex-col gap-8 border border-black">
            <div className="border border-black">
              <p className="text-gray-300 text-xs ml-1 mb-0.5">Email</p>
              <input
                className="rounded-md border border-gray-300 w-full p-1"
                name="fname"
                placeholder="Enter your First Name...."
              />
            </div>
            <div className="border border-black">
              <p className="text-gray-300 text-xs ml-1 mb-0.5">Email</p>
              <input
                className="rounded-md border border-gray-300 w-full p-1"
                name="lname"
                placeholder="Enter your Last Name...."
              />
            </div>
            <div className="border border-black">
              <p className="text-gray-300 text-xs ml-1 mb-0.5">Email</p>
              <input
                className="rounded-md border border-gray-300 w-full p-1"
                name="email"
                placeholder="Enter an email...."
              />
            </div>

            <div className="border border-black">
              <p className="text-gray-300 text-xs ml-1 mb-0.5">Password</p>
              <input
                className="rounded-md border border-gray-300 w-full p-1"
                name="password"
                type="password"
                placeholder="Enter a password...."
              />
            </div>

            <div className="border border-black">
              <button
                type="submit"
                className="bg-red-300 hover:bg-blue-500 rounded-xl py-1 px-3 transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
