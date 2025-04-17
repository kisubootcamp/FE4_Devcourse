import InputComponents from "./Input";
import Button from "./Button";

export default function Layout({
  isLogin,
  setIsLogin,
  type,
}: {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  type: "login" | "signup";
}) {
  return (
    <>
      <form className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-left text-[#4F4F4F]">
          {type === "login" ? "Login Into App" : "Sign Into App"}
        </h1>
        <span className="text-sm text-gray-500">
          Please enter your details to continue.
        </span>
        <div className="flex flex-col gap-4">
          {!isLogin && (
            <InputComponents
              type="text"
              placeholder="Enter Your Name"
              autocomplete="name"
            />
          )}
          <InputComponents
            type="text"
            placeholder="someone@example.com"
            autocomplete="email"
          />
          <InputComponents
            type="password"
            placeholder="Enter your password"
            autocomplete="current-password"
          />
          <div className="pb-3">
            <InputComponents type="checkbox">
              <label
                className="text-sm text-gray-500 cursor-pointer"
                htmlFor="checkbox"
              >
                I agree with <strong>terms</strong> and{" "}
                <strong>policies.</strong>
              </label>
            </InputComponents>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button type="submit">
            {type === "login" ? "Log In" : "Sign In"}
          </Button>
          <Button type="button" onClick={() => setIsLogin(!isLogin)}>
            {type === "login" ? "Go To Sign Up" : "Go To Log In"}
          </Button>
        </div>
      </form>
    </>
  );
}
