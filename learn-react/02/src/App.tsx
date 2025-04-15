export default function App() {
  return (
    //HMR 기능: 수정한 내용 자동 업데이트
    <>
      <h1 style={{ color: "red" }}>10+20 = {10 + 20} </h1>
      <h1 className="title">App Component</h1>
      <label htmlFor="uname">userid</label>
      <input id="uname" type="text" readOnly />
    </>
  );
}
