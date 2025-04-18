import Input from "./Input";
import CheckBox from "./CheckBox";
import Button from "./Button";

export default function Sign() {
  return (
    <div className="flex items-center justify-center p-5 bg-[#1e1e1e]">
      <div className="bg-white w-[375px] h-[495.03px] p-10 rounded-lg">
        <h2 className="text-[20px] text-[#4F4F4F] mb-2.5 font-bold">
          Sign Into App
        </h2>
        <h3 className="text-[14px] text-[#4F4F4F] mb-5 ">
          Please enter your details to continue.
        </h3>
        <Input type="name" placeholder="Enter Your Name"></Input>
        <Input type="email" placeholder="someone@example.com"></Input>
        <Input type="password" placeholder="Enter Password"></Input>

        <CheckBox>
          I agree with <strong>terms</strong> and <strong>policies</strong>.
        </CheckBox>

        <Button type="submit" fill={true}>
          Log in
        </Button>
        <Button type="submit" fill={false}>
          Go To Log In
        </Button>
      </div>
    </div>
  );
}
