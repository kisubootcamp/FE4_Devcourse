export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="bg-white w-[375px] h-[434px] p-10 rounded-lg  ">
        <h2 className="text-2xl text-[#4F4F4F] mb-2.5 font-bold ">
          Login Into App
        </h2>
        <h3 className="text-1xl text-[#4F4F4F] mb-5 ">Please enter </h3>

        <div className="pb-2">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg  "
            placeholder="someone@example.com"
          />
        </div>
        <div className="py-2">
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg  "
            placeholder="Enter Password"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="w-4 h-4 rounded-lg accent-[#4F4F4F] "
          />
          <label className="text-sm text-[#4F4F4F]">
            I agree with <strong>terms</strong> and <strong>policies</strong>.
          </label>
        </div>

        <div className="py-2 pt-8">
          <button
            type="submit"
            className="w-full px-4 py-2 border rounded-lg bg-[#4F4F4F] text-[#F5F5F5]"
          >
            Log in
          </button>
        </div>

        <div className="py-2">
          <button
            type="submit"
            className="w-full px-4 py-2 border rounded-lg bg-[#F5F5F5] text-[#4F4F4F]"
          >
            Go To Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
