export default function App() {
  return (
    <div className="flex justify-center gap-4">
      <div className="bg-white px-5 py-10 rounded-xl w-fit h-fit mt-10 flex flex-col">
        <h1 className="text-2xl font-semibold text-[#4f4f4f] mt-5 pb-2.5">
          Login Into App
        </h1>
        <p className="text-[#4f4f4f] text-sm pb-5">
          Please enter you details to continue.
        </p>

        <input
          type="email"
          placeholder="someone@example.com"
          className="w-[330px] border border-[#4f4f4f] rounded-md py-3.5 px-4 mb-4 text-[#ACACAC]"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-[330px] border border-[#4f4f4f] rounded-md py-3.5 px-4 mb-4 text-[#ACACAC]"
        />

        <label className="flex items-center space-x-2 mb-8 mt-4">
          <input type="checkbox" className="w-5 h-5 accent-[#4f4f4f]" />
          <span className="text-[#4f4f4f] text-sm">
            I agree with <strong>terms</strong> and <strong>policies</strong>
          </span>
        </label>

        <button className="w-[330px] bg-[#4f4f4f] text-white rounded-md mb-4 px-5 py-4">
          Log In
        </button>
        <button className="w-[330px] border border-[#4f4f4f] text-[#4f4f4f] rounded-md mb-10 px-5 py-4">
          Go To Sign up
        </button>
      </div>
      <div className="bg-white px-5 py-10 rounded-xl  w-fit h-fit mt-10 flex flex-col">
        <h1 className="text-2xl font-semibold text-[#4f4f4f] mt-5 pb-2.5">
          Sign Into App
        </h1>
        <p className="text-[#4f4f4f] text-sm pb-5">
          Please enter you details to continue.
        </p>

        <input
          type="email"
          placeholder="Enter Your Name"
          className="w-[330px] border border-[#4f4f4f] rounded-md py-3.5 px-4 mb-4 text-[#ACACAC]"
        />
        <input
          type="password"
          placeholder="someone@example.com"
          className="w-[330px] border border-[#4f4f4f] rounded-md py-3.5 px-4 mb-4 text-[#ACACAC]"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-[330px] border border-[#4f4f4f] rounded-md py-3.5 px-4 mb-4 text-[#ACACAC]"
        />

        <label className="flex items-center space-x-2 mb-8 mt-4">
          <input type="checkbox" className="w-5 h-5 accent-[#4f4f4f]" />
          <span className="text-[#4f4f4f] text-sm">
            I agree with <strong>terms</strong> and <strong>policies</strong>
          </span>
        </label>

        <button className="w-[330px] bg-[#4f4f4f] text-white rounded-md mb-4 px-5 py-4">
          Sign In
        </button>
        <button className="w-[330px] border border-[#4f4f4f] text-[#4f4f4f] rounded-md mb-10 px-5 py-4">
          Go To Log In
        </button>
      </div>
    </div>
  );
}
