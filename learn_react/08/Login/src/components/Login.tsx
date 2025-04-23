import React, { useRef, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const myEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);
  const myPassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
  };

  const [checked, setChecked] = useState(false);
  const handlerCheckbox = () => {
    setChecked((checked) => !checked);
  };

  const handleLogin = () => {
    if (!email) {
      alert("이메일을 입력해주세요");
      emailRef.current?.focus();
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요");
      passwordRef.current?.focus();
      return;
    }
  };

  return (
    <article className="w-sm mt-[10px] p-[60px] bg-gray-400/10 rounded-lg">
      <h1 className="text-2xl font-bold mb-2 text-left text-[#4f4f4f]">
        Login Into App
      </h1>
      <p className="text-sm text-[#4f4f4f] mb-6 text-left">
        Please enter your details to continue.
      </p>

      <div className="mb-4 space-y-3">
        <input
          value={email}
          onChange={myEmail}
          ref={emailRef}
          className="w-full px-4 py-2 border rounded-md bg-white"
          type="text"
          placeholder="someone@example.com"
        />
        <input
          value={password}
          ref={passwordRef}
          onChange={myPassword}
          className="w-full px-4 py-2 border rounded-md bg-white"
          type="password"
          placeholder="Enter Password"
        />
      </div>

      <div className="flex items-center mb-4">
        <input
          className="mr-2 accent-[#4f4f4f]"
          type="checkbox"
          checked={checked}
          onChange={handlerCheckbox}
          id="terms"
        />
        <label htmlFor="terms" className="text-sm text-[#4f4f4f]">
          I agree with terms and policies.
        </label>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleLogin}
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-[#4f4f4f] transition"
        >
          Log In
        </button>
        <button className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-[#4f4f4f] transition">
          Go To Sign Up
        </button>
      </div>
    </article>
  );
}
