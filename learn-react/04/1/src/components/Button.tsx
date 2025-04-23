export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 콘텐츠가 있는 문법 */}
      {/* 콘텐츠: <시작태그>....</종료태그> */}
      {/* 콘텐츠 없는 문법 */}
      <button>{children}</button>
    </>
  );
}
//App.tsx에서 <Button>로그인</Button>하고 이 조작한 콘텐츠를 children으로 받고
// children의 타입은 React.ReactNode로 지정
//컴포넌트에 콘텐츠를 전달하는 방법
/*ex) 
 <Button>
    <h1>로그인</h1>
    <h2>로그아웃</h2>
 </Button> 이 App.tsx에 작성되어있다면
 h1,h2모두 합쳐서 컴포넌트에(children로) 전달됨
 ex2) <Text/>,img,...등 모든 종류 다 가능
*/
