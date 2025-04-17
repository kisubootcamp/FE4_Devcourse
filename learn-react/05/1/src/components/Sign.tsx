export default function Sign() {
    return (
        <div className="flex flex-col gap-[20px] w-[375px] h-[495px] rounded-[8px] bg-white p-[40px_25px]">
            {/* 헤더 영역 */}
            <div>
                <h2 className="text-xl font-semibold mb-1 text-[#4F4F4F]">Sign Into App</h2>
                <p className="text-sm text-gray-500">Please enter your details to continue.</p>
            </div>

            {/* 입력 영역과 버튼 영역 묶기 */}
            <div className="flex flex-col gap-[32px]">
                {/* 입력 + 체크박스 */}
                <div className="flex flex-col gap-[16px]">
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-[325px] h-[44px] px-3 py-2 border rounded-[8px] text-sm"
                    />
                    <input
                        type="email"
                        placeholder="someone@example.com"
                        className="w-[325px] h-[44px] px-3 py-2 border rounded-[8px] text-sm"
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-[325px] h-[44px] px-3 py-2 border rounded-[8px] text-sm"
                    />
                    <label className="flex items-center gap-2 w-[260px] h-[20px]">
                        <input type="checkbox" className="w-[20px] h-[20px] accent-[#4F4F4F]" checked />
                        <div className="w-[240px] h-[20px] text-sm">
                            I agree with <strong>terms</strong> and <strong>policies.</strong>
                        </div>
                    </label>
                </div>

                {/* 버튼들 */}
                <div className="flex flex-col gap-[16px] w-[325px] h-[104px]">
                    <button className="w-[325px] h-[44px] py-2 rounded-[8px] bg-[#4F4F4F] text-white text-sm">
                        Sign In
                    </button>
                    <button className="w-[325px] h-[44px] py-2 rounded-[8px] border text-sm">Go To Log In</button>
                </div>
            </div>
        </div>
    );
}
