import { useRef, useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const isSubmiting = useRef(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmiting.current) return;
    if (!email) {
      alert("이메일을 입력해주세요.");
      // (document.querySelector("input[type='text']") as HTMLInputElement).focus();
      emailRef.current?.focus();
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요.");
      pwRef.current?.focus();
      return;
    }
    isSubmiting.current = true;
    console.log("로그인됨");
    setTimeout(() => {
      isSubmiting.current = false;
    }, 2000);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} ref={pwRef} />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
