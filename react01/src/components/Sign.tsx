import Button from "./Button";
import Input from "./Input";

export default function Sign() {
  return (
    <>
      <br />
      <div className="w-[375px] h-[495px] rounded-[8px] bg-white mb-[20px]">
        <h1 className="font-bold text-[20px] ml-[26px] pt-[30px] mb-[10px]">Sign Into App</h1>
        <div className="ml-[26px] mb-[20px]">Please enter your details to continue</div>

        <Input type="text" className="input-style" placeholder="Enter Your Name" />
        <Input type="email" className="input-style" placeholder="someone@example.com" />
        <Input type="password" className="input-style" placeholder="Enter Password" />
        <form className="ml-6 mb-8 flex items-center">
          <input type="checkbox" className="focus:bg-[#4f4f4f]" />
          <label htmlFor="html" className="ml-2 text-sm ">
            I agree with <strong>terms</strong> and <strong>policies.</strong>
          </label>
        </form>
        <Button className="text-[#f5f5f5]">Sign In</Button>
        <Button className="bg-white">Go To Log In</Button>
      </div>
    </>
  );
}
