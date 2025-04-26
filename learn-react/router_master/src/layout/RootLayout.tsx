import { Link, NavLink, Outlet, useNavigate } from "react-router";

export default function RootLayout() {
	const navigate = useNavigate();

	const goHome = () => {
		navigate("/");
	};
	return (
		<>
			<header>header</header>
			<nav>
				<ul>
					<li>
						<Link to="/">/</Link>
					</li>
					<li>
						<Link to="/about">/about</Link>
					</li>
					<li>
						{/* 클래스네임이든 style이든 어떤거든 활성상태를 알 수 있는 콜백함수를 리턴해준다 */}
						<NavLink to="/read/1" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
							{({ isActive }) => <span>/read/1 ({isActive ? "선택됨" : "선택안됨"})</span>}
						</NavLink>
					</li>

					<li>
						<button onClick={goHome}>이동하기</button>
					</li>
				</ul>
			</nav>
			<Outlet></Outlet>
			<footer>footer</footer>
		</>
	);
}
