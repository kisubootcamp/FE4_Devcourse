import Wrapper from "./Wrapper";

export default function LogIn() {
  return (
    <>
      <Wrapper>
        <h1 className="text-2xl font-bold mb-[10px] !text-black">
          Login Into App
        </h1>
        <p className="mb-[20px] !text-black">
          Please enter your details to continue.
        </p>
        <input
          type="text"
          placeholder="someone@example.com"
          className="border border-[#4f4f4f] rounded-[8px] px-[12px] py-[10px] mb-[15px]"
        ></input>
        <input
          type="password"
          placeholder="Enter Password"
          className="border border-[#4f4f4f] rounded-[8px] px-[12px] py-[10px] mb-[15px]"
        ></input>
        <div className="flex items-center mb-[25px]">
          <input
            type="checkbox"
            id="logInId"
            name="logInId"
            className="mr-[10px] w-4 h-4"
          />
          <label htmlFor="logInId" className="!text-black">
            I agree with <strong>terms</strong> and <strong>policies.</strong>
          </label>
        </div>
        <button className="border border-[#4f4f4f] rounded-[8px] py-[8px] font-blod bg-[#4f4f4f] !text-white mb-[15px] cursor-pointer">
          Log In
        </button>
        <button className="border border-[#4f4f4f] rounded-[8px] py-[8px] font-bold cursor-pointer">
          Go To Sing up
        </button>
      </Wrapper>
    </>
  );
}
