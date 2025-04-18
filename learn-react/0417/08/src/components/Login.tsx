export default function Login() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 w-80">
            <h2 className="text-lg font-semibold mb-2">Login Into App</h2>
            <p className="text-sm text-[#4f4f4f] mb-4">Please enter your details to continue.</p>

            <div className="space-y-3">
                <input
                    type="email"
                    placeholder="someone@example.com"
                    className="w-full px-3 py-2 border border-[#4f4f4f] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4f4f4f] placeholder-[#acacac]"
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full px-3 py-2 border border-[#4f4f4f] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4f4f4f] placeholder-[#acacac]"
                />
                <label className="flex items-center text-sm text-[#4f4f4f]">
                    <input type="checkbox" className="mr-2 accent-[#4f4f4f]" />
                    I agree with <span className="font-semibold ml-1">terms and policies</span>.
                </label>
            </div>

            <div className="mt-5 space-y-2">
                <button className="w-full bg-[#4f4f4f] text-white py-2 rounded-md text-sm hover:opacity-90 transition">
                    Log In
                </button>
                <button className="w-full border border-[#4f4f4f] text-sm py-2 rounded-md hover:bg-[#f4f4f4] transition">
                    Go To Sign Up
                </button>
            </div>
        </div>
    );
}