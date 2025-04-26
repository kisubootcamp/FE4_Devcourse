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
			{/* Route아니고 Routes */}
			{/* Routes는 Route컴포넌트들을 묶어주는 역할을 함 */}
			<Routes>
				{/* 레이아웃 라웉, */}
				<Route element={<RootLayout></RootLayout>}>
					{/* <Route path="/" element={<h1>Home</h1>} /> */}
					<Route path="/" element={<Home></Home>} />
					<Route path="/about" element={<About></About>} /> {/* about 페이지가 생성됨 */}
					<Route path="/about" element={<About></About>} /> {/* about 페이지가 생성됨 */}
					{/* 중첩 라우트 */}
					<Route path="dashboard" element={<Dashboard></Dashboard>}>
						<Route index element={<Summary></Summary>}></Route>
						<Route path="settings" element={<Settings></Settings>}></Route>
					</Route>
					{/* 위에는 http://localhost:5175/dashboard 주소로 접근 가능했다면 */}
					<Route path="my">
						{" "}
						{/* http://localhost:5175/my/dashboard로 접근 가능 */}
						<Route path="dashboard" element={<Dashboard></Dashboard>}>
							<Route index element={<Summary></Summary>}></Route>
							<Route path="settings" element={<Settings></Settings>}></Route>
						</Route>
					</Route>
					{/* <Route path="/read" element={<Read></Read>}></Route>
					<Route path="/read/1" element={<Read></Read>}></Route>
					<Route path="/read/2" element={<Read></Read>}></Route>
					<Route path="/read/3" element={<Read></Read>}></Route> */}
					{/* 이런식으로 생길텐데 이걸 몇개일지 모르고 미리미리 만들어 둘 수 없기 때문에 사용하는 방식 -> 동적 세그먼트 방식 */}
					{/* 동적 세그먼트 */}
					{/* 아래와 같이 작성하면 read/**의 형식만 맞으면 어떤 값이든 다 들어갈 수 있다. read/hi이런것도 가능 */}
					<Route path="/read/:id" element={<Read></Read>}></Route>

          {/* 옵셔널 세그먼트 - 해당 값이 와도 되고 안와도 됨. http://localhost:5175/hi 도 가능 */}
          {/* 잘 쓰지는 않는다 */}
          {/* <Route path="/read?/:id" element={<Read></Read>}></Route> */}

          
				</Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
		</>
	);
}
