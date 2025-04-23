import { useRef } from 'react';

export default function App() {
  const isSubmitting = useRef(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;
    isSubmitting.current = true;
    console.log('로그인됨');
    setTimeout(() => {
      isSubmitting.current = false;
    }, 2000);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" />
        <input type="password" />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
