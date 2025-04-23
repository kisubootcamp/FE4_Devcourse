import { useState, FormEvent, useRef } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

// ref 객체는 리액트 18 컴포넌트 props로 전달되지 않음
// 리액트 19 부터 ref 객체를 그냥 전달할 수 있게 됨

interface LoginFormData {
  email: string;
  password: string;
  agree: boolean;
}

const TEST_CREDENTIALS = {
  email: "test@test.com",
  password: "test",
};

const ERROR_MESSAGES = {
  EMPTY_FIELDS: "Please fill all the fields.",
  LOGIN_SUCCESS: "Login successful",
  LOGIN_FAILED: "Login failed",
};

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    agree: false,
  });
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    field: keyof LoginFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { email, password, agree } = formData;

    if (!email || !password) {
      alert(ERROR_MESSAGES.EMPTY_FIELDS);
      if (!email) emailRef.current?.focus();
      else passwordRef.current?.focus();

      return false;
    }

    if (!agree) {
      alert(ERROR_MESSAGES.EMPTY_FIELDS);
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { email, password } = formData;
    const isLoginSuccessful =
      email === TEST_CREDENTIALS.email &&
      password === TEST_CREDENTIALS.password;

    alert(
      isLoginSuccessful
        ? ERROR_MESSAGES.LOGIN_SUCCESS
        : ERROR_MESSAGES.LOGIN_FAILED
    );
  };

  return (
    <div className="item-middle bg-black">
      <div className="w-[375px] h-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
        <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <Input
            type="email"
            className="input-style"
            placeholder="someone@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            ref={emailRef}
          />
          <Input
            type="password"
            className="input-style"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            ref={passwordRef}
          />
          <Checkbox
            checked={formData.agree}
            onChange={() => handleInputChange("agree", !formData.agree)}
          >
            <span className="text-sm color-[#4f4f4f]">
              I agree with <em className="not-italic font-bold">terms</em> and{" "}
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
              Go To Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
