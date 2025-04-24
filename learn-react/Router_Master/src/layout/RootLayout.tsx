import { Link, NavLink, Outlet, useNavigate } from "react-router";

export default function RootLayout() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1>RootLayout Component</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink
              to="/read/1"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            >
              {({ isActive }) => (
                <span>{isActive ? "선택됨" : "선택안됨"}</span>
              )}
            </NavLink>
          </li>
          <li>
            <button onClick={goHome}>집</button>
          </li>
        </ul>
      </nav>
      <Outlet />
      <h1>Root</h1>
    </>
  );
}
// RootLayoutlet에 렌더링
// 같은 header, footer를 보게 할 수 있다.
// a태그는 모든 컴포넌트를 렌더링시킨다.
// NavLink는 해당 링크가 활성 상태인지 검사할 수 있는 방법을 제공함
// 콜백함수로도 디자인을 줄 수 있다.
