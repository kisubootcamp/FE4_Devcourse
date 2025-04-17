import { useState } from "react";
import Layout from "./components/Layout";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="continer flex iterms-center justify-center h-screen bg-black">
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
          <div className="rounded-md bg-white py-12 px-8 w-[375px]">
            <Layout
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              type={isLogin ? "login" : "signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
