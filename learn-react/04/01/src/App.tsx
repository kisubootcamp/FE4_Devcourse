import User from "./components/User";

export default function App() {
  const myFunction = (
    e: React.MouseEvent<HTMLButtonElement>,
    message: string
  ) => {
    alert(message);
  };
  const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(e.nativeEvent);
  };

  return (
    <>
      <User
        message="안녕하세요"
        count={10}
        isVisible={true}
        tags={["react", "ts", "js"]}
        user={{ id: 1, name: "SeolWolWha" }}
        myFunction={myFunction}
        greet={greet}
      />
    </>
  );
}
// tsconfig.app.json을 보면 기본이 src로 지정되어 있음
// d.ts: declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를 타입스크립트에 제공하기 위해 사용하는 파일 형식.
// d.ts파일은 types폴더 안에 놓는 것이 일반적

// 이벤트
// 이벤트 속성 HTML 태그에서 사용할 수 있는 이벤트 속성
// onclick
/* "10": 문자열 10, {10}: 숫자열 10 */
