import { useRef, useState } from 'react';

//useRef 훅
// 값이 변경되도 리렌더링이 발생하지 않는 변수
// JSX 요소를 참조하는 경우

// 실시간으로 보여질 때 setState
export default function App() {
  console.log('App component'); //리렌더링
  const cnt = useRef(0);
  const [count, setCount] = useState(0); // useState훅은 다시 실행안됨
  const increment = () => {
    cnt.current += 1;
    setCount((count) => count + Math.floor(Math.random() * 10) + 1);
  };
  const printConsole = () => {
    console.log(`지금까지 ${cnt.current}번 클릭되`);
  };
  // const [email, setEmail] = useState('');
  // const emailRef = useRef<HTMLInputElement>(null);
  // const [pw, setPw] = useState('');
  // const pwRef = useRef<HTMLInputElement>(null);
  // const isSubmitting = useRef(false);
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (isSubmitting.current) return;
  //   if (!email) {
  //     alert('이메일을 입력해주세요');
  //     emailRef.current?.focus();
  //     return;
  //   }
  //   if (!pw) {
  //     alert('비밀번호를 입력해주세요');
  //     emailRef.current?.focus();
  //     return;
  //   }
  //   isSubmitting.current = true;
  //   console.log('로그인됨');
  //   setTimeout(() => {
  //     isSubmitting.current = false;
  //   }, 2000);
  // };
  return (
    <>
      <h1 className="text-3xl underline">count: {count}</h1>
      <button onClick={increment}>add</button>

      <br />
      <button onClick={printConsole}>몇 번 눌림?</button>
      {/* <form action="" onSubmit={handleSubmit}> */}
      {/* <input
          ref={emailRef}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={pwRef}
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form> */}
    </>
  );
}
