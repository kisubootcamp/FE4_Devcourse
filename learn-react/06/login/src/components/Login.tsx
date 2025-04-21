import { useRef, useState } from 'react';
import Input from './html/Input';
import Checkbox from './html/Checkbox';
import Button from './html/Button';

export default function Login() {
  const [agree, setAgree] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const pwRef = useRef<HTMLInputElement>(null);
  const [pw, setPw] = useState('');
  const pwChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해주세요.');
      emailRef.current?.focus();
      return;
    }
    if (!pw) {
      alert('비밀번호를 입력해주세요.');
      pwRef.current?.focus();
      return;
    }

    alert('Login Successfully!');
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form action="" className="grid gap-4" onSubmit={submitHandler}>
            <Input
              type="text"
              className="input-style"
              placeholder="someone@example.com"
              value={email}
              ref={emailRef}
              onChange={emailChangeHandler}
            />
            <Input
              type="password"
              className="input-style"
              placeholder="Enter Password"
              value={pw}
              ref={pwRef}
              onChange={pwChangeHandler}
            />
            <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{' '}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                Log In
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
              >
                Go To Sing up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
