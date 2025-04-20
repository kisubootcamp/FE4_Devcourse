/*
1.조건부 렌더링
1.1. if는 jsx내부에서 사용불가
if (isLogin) {
     return <LoggedIn />;
   } 처럼 사용
=> 즉시실행 함수에서는 내부에 if문 사용가능
 export default function App() {
   const isLogin = false;
   return (
     <>
       {(() => {
         if (isLogin) {
           return <h1>Login!</h1>;
         }
         return <h1>Logout!</h1>;
       })()}
     </>
   );
 }

1.2. 삼항연산자(제일사용x)
return <>{isLogin ? <LoggedIn /> : <h1>User is Not Login!</h1>}</>;

1.3. 논리 &&연산자
1.3.1. expr1 && expr2 : expr1 이 true이면 expr2 연산해주세요.
 return (
    <>
       {isLogin && <h1>User Is Login!</h1>}
       {!isLogin && <h1>User Is Not Login!</h1>}
    </>
  );
*/

/*
2. 반복 렌더링
2.1. map()으로 반복문 실행시킴 [].map()
App.tsx
const users=[{id:1,name:"John",age:20,}];
return(<>
<ul>{users.map((user)=>(<User key={user.id}{...user}/>))}</ul>
</>);

User.tsx
return(<>
<h1>{name}</h1> //스프레드 연산자로 App.tsx에서 나타냈다면 객체의 일부만 받아와도됨
//(명확한 객체 속 속성이 명시되어있지 않으므로)
</>);
=>key 속성값을 unique하게
=>key는 user컴포넌트에 전달되지 않음
=>되도록이면 index값은 넣지 말것 / 배열 내 요소 추가시 index가 뒤로 밀려버림(기존 값 삭제될 수 있음)
*/

/*Button.tsx에서의 속성 선언,정의
Button.tsx => 사용할 속성만 꺼내어두면 App.tsx에서 그 부분의 값만 작성해줘도됨
1.
type ButtonProps = React.ComponentPropsWithoutRef<"button">;
//button태그에서 사용할 수 있는 속성들의 집합
//뒤에 &{사용자 추가속성};으로 추가할 수 있음
2.
props:ButtonProps처럼 타입지정에 사용하면됨
//모든 요소들이 optional로 사용됨
3.
const { className, children, ...rest } = props; 
//사용할 속성(className,children)만 꺼내 사용(나머지는 rest로)
4.
disabled: 비활성화(button에서는 클릭이 안됨)
*/

/*Input.tsx에서의 속성 선언,정의
type OnlyLiterals<T> : 리터럴 타입만 추출
type ReactInputType=OnlyLiterals<React.InputHTMLAttributes<HTMLInputElement<["type"]> : input 태그의 리터럴타입만 뽑아옴
type InputProps=Omit<React.ComponentPropsWithoutRef<"input">,"type">
&{type?: Exclude<ReactInputType, "radio"|"checkbox"|"range"}> : input태그 속성중 type만 뺴놓고 넣고, type은 ReactInputType(input의 리터럴타입들)에서 radio,checkbox,range 제외
*/

/*3번 폴더 Count.tsx 
=>useState, useReducer : 리액트 훅(리액트 기능 할 수 있게 만들어주는 함수)

1.state,setState
state:상태변수 (직접적으로 값을 바꾸면 안됨)
setState: 상태 업데이트 함수(이름은 set***형태)
const [count,setCount]=useState<null|number>(null)

2.리렌더링
현재 위치로부터 하위컴포넌트까지 변경값 화면에 반영
2.1. 초기값과 변경되는 값의 타입이 다르면 제네릭 생략 불가
2.2. 리액트는 var,let,const로 선언된 변수의 값 변경사항 인지 불가
2.3. 업데이트
2.3.1. 상태업데이트함수(값): 현재 상태값이 필요하지 않은 경우/ 값으로 업데이트
ex) setCount(2000);
2.3.2. 상태업데이트함수(콜백함수): 현재 상태값이 필요한 경우/ 함수의 매개변수로 업데이트
ex) setCount((count)=>count+1); 바로 변경값이 반영됨
ex2) setCount(count+1); 비동기; setCount가 실행완료될때까지 기다리지 않고 바로 변경값 반영되지 않음(한템포 느림)
=> 현재 보이는 렌더링 시점의 count값을 기준으로 설정
*/
