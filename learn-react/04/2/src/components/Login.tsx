export default function Login() {
  return (
    <>
      <div className="w-[400px] bg-white px-8 py-10 rounded-xl">
        <div className="mb-8 text-left">
          <h1 className="text-2xl font-bold mb-2">Login Into App</h1>
          <p className="text-sm text-gray-500">Please enter your details to continue.</p>
        </div>

        <div className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="someone@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
          />

          <label className="flex items-start gap-2 text-sm text-gray-700 leading-5">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-gray-500" />
            <div>
              I agree with <strong>terms</strong> and <strong>policies.</strong>
            </div>
          </label>

          <div className="flex flex-col gap-3 mt-2">
            <button className="bg-gray-500 text-white py-2 rounded-[8px]">Log In</button>
            <button className="text-sm text-gray-500 border py-2 rounded-[8px]">Go to Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}
