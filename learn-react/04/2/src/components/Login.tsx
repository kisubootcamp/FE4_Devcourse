export default function Login({
  onLogIn,
  onGoToSignUp,
}: {
  onLogIn: () => void;
  onGoToSignUp: () => void;
}) {
  return (
    <>
      <div className="flex flex-col mt-[40px] ml-[25px]">
        <h1 className="text-[20px] font-bold mb-[10px]">Log Into App</h1>

        <p className="text-[14px] mb-[20px]">
          Please enter your details to continue.
        </p>

        <input
          type="text"
          className="w-[325px] h-[44px] px-3 border mb-[16px] border-black rounded-[8px]"
          placeholder=" someone@example.com"
        />

        <input
          type="password"
          className="w-[325px] h-[44px] px-3 border mb-[16px] border-black rounded-[8px]"
          placeholder=" Enter Password"
        />

        <div>
          <input type="checkbox" id="agree" className="mb-[32px]" />
          <label htmlFor="agree"> I agree with terms and policies.</label>
        </div>

        <button
          onClick={onLogIn}
          className="w-[325px] h-[44px] mb-[16px] rounded-[8px] bg-[#4f4f4f] text-white"
        >
          Log in
        </button>

        <button
          onClick={onGoToSignUp}
          className="w-[325px] h-[44px] border-1 rounded-[8px]"
        >
          Go To Sign up
        </button>
      </div>
    </>
  );
}
