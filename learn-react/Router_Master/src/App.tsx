import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Settings from "./pages/Settings";
import RootLayout from "./layout/RootLayout";
import Read from "./pages/Read";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 라우트 프리픽스 */}
          <Route path="my">
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Summary />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
          </Route>
          <Route path="/read/:a" element={<Read />} />
          {/* <Route path="/read/*" element={<h1>splat read</h1>}/> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
// 중첩 라우트: 라우트 안에 또 다른 라우트가 있는 것
// path에서 물음표를 붙이면 옵셔널 세그먼트가 된다. 잘 쓰지는 않음

// {/* 동적 세그먼트 */}
// {/* 여러 루트를 따로 지정해줄 필요 없이 동적으로 루트가 생성된다. */}
// *: 스플랫
// 스플랫과 id는 동시에 쓸 수 없다.
// 리액트19에서는 타이틀과 메타태그를 JSX에서도 사용할 수 있다.
