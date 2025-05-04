import { Route, Routes } from "react-router";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Read from "./pages/Read";
import Settings from "./pages/Settings";
import Summary from "./pages/Summary";

export default function App() {
  return (
    <>
      <Routes>
        {/* 레이아웃 라우트 */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 중첩 라우트 */}
          {/* 라우트 프리픽스 */}
          <Route path="my">
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Summary />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          {/* 동적 세그먼트 */}
          <Route path="/read/:a" element={<Read />} />
          {/* 옵셔널 세그먼트 ? */}
          {/* <Route path="/read?/:id" element={<Read />} /> */}
        </Route>
        {/* 스플랫 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
