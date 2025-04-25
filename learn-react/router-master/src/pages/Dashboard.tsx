import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard Component</h1>
      <Outlet />
    </>
  );
}
//중첩해서 페이지 여러개 보여주고 싶을 떄 사용
