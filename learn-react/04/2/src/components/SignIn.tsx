export default function SignIn({
  onSignIn,
  onGoToLogIn,
}: {
  onSignIn: () => void;
  onGoToLogIn: () => void;
}) {
  return (
    <>
      <div className="flex flex-col mt-[40px] ml-[25px]">
        <h1 className="text-[20px] font-bold mb-[10px]">Sign Into App</h1>
        <p className="text-[14px] mb-[20px]">
          Please enter your details to continue.
        </p>

        <input
          type="text"
          className="w-[325px] h-[44px] px-3 border mb-[16px] border-black rounded-[8px]"
          placeholder=" Enter Your Name"
        />

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
          onClick={onSignIn}
          className="w-[325px] h-[44px] mb-[16px] rounded-[8px] bg-[#4f4f4f] text-white"
        >
          Sign In
        </button>

        <button
          onClick={onGoToLogIn}
          className="w-[325px] h-[44px] border rounded-[8px]"
        >
          Go To Log In
        </button>
      </div>
    </>
  );
}
