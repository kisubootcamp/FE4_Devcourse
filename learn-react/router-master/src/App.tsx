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
        {/* 레이아웃 라우트 */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          {/* 중첩 라우트 */}
          {/* 라우트 프리픽스 */}

          <Route path="my">
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Summary />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
          </Route>
          {/* 동적 세그먼트*/}
          {/* 옵셔널 세그먼트(?) 도 가능*/}
          <Route path="/read/:id" element={<Read />} />
          {/* 스플렛(*)은 모든 하위 라우트를 의미(와일드 카드) =>404 Not Found 에 사용*/}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
