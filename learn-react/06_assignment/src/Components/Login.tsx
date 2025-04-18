//import "../css/Login.css";

type loginInfo = {
  email: string;
  password: string;
  agree: boolean;
};

export default function Login({ email, password, agree }: loginInfo) {
  return (
    <>
      <div className="w-[375px] bg-white rounded-lg p-8 flex flex-col gap-4 shadow-md">
        <h1 className="font-bold text-[28px] text-[#4f4f4f] ">
          Login Into App
        </h1>
        <p className="text-[14px] text-[#4f4f4f]">
          Please enter your details to continue.
        </p>
        <input
          type="email"
          placeholder="someone@example.com"
          className="border rounded-lg border-[#4f4f4f] p-3 "
          value={email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="border rounded-lg border-[#4f4f4f] p-3"
          value={password}
        />
        <label className="flex items-center gap-1.5 text-[#4f4f4f] text-[14px]">
          <input
            type="checkbox"
            checked={agree}
            className="peer w-4.5 h-4.5 cursor-pointer"
          />
          I agree with <b>terms</b> and <b>policies</b>
        </label>
        <button className="border rounded-lg cursor-pointer border-[#4f4f4f] bg-[#4f4f4f] text-white text-[14px] p-3 ">
          Log In
        </button>
        <button className="border rounded-lg cursor-pointer border-[#4f4f4f] p-3 text-[14px] ">
          Go To Sing up
        </button>
      </div>
    </>
  );
}
