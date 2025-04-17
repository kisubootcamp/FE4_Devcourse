export default function SignUp() {
  return (
    <article className="w-sm mt-[10px] p-[60px] bg-gray-400/10 rounded-lg">
      <h1 className="text-2xl font-bold mb-2 text-left text-[#4f4f4f]">
        Sign Into App
      </h1>
      <p className="text-sm text-[#4f4f4f] mb-6 text-left">
        Please enter your details to continue.
      </p>

      <div className="mb-4 space-y-3">
        <input
          className="w-full px-4 py-2 border rounded-md bg-white"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          className="w-full px-4 py-2 border rounded-md bg-white"
          type="text"
          placeholder="someone@example.com"
        />
        <input
          className="w-full px-4 py-2 border rounded-md bg-white"
          type="password"
          placeholder="Enter Password"
        />
      </div>

      <div className="flex items-center mb-4">
        <input className="mr-2 accent-[#4f4f4f]" type="checkbox" id="terms" />
        <label htmlFor="terms" className="text-sm text-[#4f4f4f]">
          I agree with terms and policies.
        </label>
      </div>

      <div className="space-y-4">
        <button className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-[#4f4f4f] transition">
          Sign In
        </button>
        <button className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-[#4f4f4f] transition">
          Go To Log In
        </button>
      </div>
    </article>
  );
}
