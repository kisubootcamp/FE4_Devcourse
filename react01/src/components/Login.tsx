import Button from "./Button";
import Input from "./Input";

export default function Login() {
  return (
    <>
      <br />
      <div className="w-[375px] h-[435px] rounded-lg bg-white m-0px">
        <h1 className="font-bold text-[20px]] ml-[26px] pt-[30px] mb-[10px]">Login Into App</h1>
        <div className="ml-[26px] mb-[20px]">Please enter your details to continue</div>

        <Input type="email" className="input-style" placeholder="someone@example.com" />
        <Input type="password" className="input-style" placeholder="Enter Password" />
        <form className="ml-6 mb-8 flex items-center">
          <input type="checkbox" className="focus:bg-[#4f4f4f]" />
          <label htmlFor="html" className="ml-2 text-sm ">
            I agree with <strong>terms</strong> and <strong>policies.</strong>
          </label>
        </form>
        <Button className="text-[#f5f5f5]">Log In</Button>
        <Button className="bg-white">Go To Sign up</Button>
      </div>
    </>
  );
}
