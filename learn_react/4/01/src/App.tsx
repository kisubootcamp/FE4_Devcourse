import User from "./components/User";

export default function App() {
  const myFunction = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (e.target) return alert(e.nativeEvent);
    else alert("메세지가 없습니다.");
  };
  return (
    <>
      <User
        message="안녕하세요"
        isVisible={true}
        count={10}
        tags={["리액트", "뷰", "앵귤러"]}
        user={{ id: 1, name: "이준호" }}
        myFunction={myFunction}
      />
      <h1 className="text-3xl underline">App Component</h1>
    </>
  );
}

//d.ts
//declaratiom file
//자바스크립트 라이브러리나 모듈에 대한 타입 정보를 타입스크립트에 제공하기 사용하는 파일 형식
