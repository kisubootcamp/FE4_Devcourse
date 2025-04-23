import { useRef, useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const myEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);
  const myPassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPw(e.target.value);
  };

  const isSubmitting = useRef(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;

    if (!email) {
      alert("이메일을 입력하세요.");
      emailRef.current?.focus();
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요.");
      pwRef.current?.focus();
      return;
    }

    isSubmitting.current = true;
    console.log("login");

    setTimeout(() => {
      isSubmitting.current = false;
    }, 2000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={myEmail} ref={emailRef} />
        <input type="password" value={pw} onChange={myPassword} ref={pwRef} />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
