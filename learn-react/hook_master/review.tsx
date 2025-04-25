//훅: 1. 값,함수 변경해서 jsx에 반영하고싶을때(로직묶기,) 2. 컴포넌트,함수,값 메모이제이션으로 리렌더링 방지할때 3.리렌더링후 사이드이펙트 실행할때

/*useState 훅:상태 관리(상태 변경)
먼저 const[state,setState]=useState(타입(혹은 초기값도 함께)); /변경되는 값의 타입===초기값 타입=>제너릭 생략가능, 아니면 적어주기
//1. 변경되는 값이 현재 상태와 관련 o=>setState(state)=>state+1)로 콜백함수 넘기기
       관련x=>setState(10);로 값 넘기기
//2. 불변성 유지=> 값에 직접 접근하여 변경하지 말고 상태 업데이트 함수 통해서 변경할것
        map(),filter(),spread operator(...)사용
*/

/*useRef 훅: 
1. 값 업데이트 되지만 렌더링되지 않고 초기값 유지 const count=useRef(0);
2. DOM 요소 참조(jsx) => 클릭후 focus()하고싶을때 사용
   ex)
    export default function Example() {
    const inputRef = useRef(); // ref 생성

    const focusInput = () => {
        inputRef.current.focus(); // 해당 input DOM에 포커스
    };

    return (
        <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>포커스</button>
        </div>
    );
    }

*/

/*useEffect 훅: 사이드 이펙트 생성,업데이트,삭제
//사이드 이펙트 예: API 호출, DOM 조작, 타이머 설정 등
//컴포넌트가 렌더링 된 후 사이드 이펙트 수행할 수 있도록
//렌더링 될때마다 실행됨.
useEffect(()=>{},[의존성 배열]); => 의존성 배열 비어있으면 한번 렌더링 될때만 실행됨
//내부에서 return()=>{};로 컴포넌트가 언마운트될때 clean up할 수 있음. 

//ex)
const [data,setData]=useState(null);
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")//API호출
        .then((response)=>response.json())
        .then((data)=>{
            setData(data);
        });
    const interval=setInterval(()=>{},1000);
    const timeout=setTimeout(()=>{},1000);

    return ()=>{
        clearInterval(interval);
        clearTimeout(timeout);
    };
},[]);
*/

/*useReducer훅 : 여러 로직 실행
//문법 복잡하지만 한 함수에 여러 기능이 동시에 들어있으므로 유지보수에 좋음

export default function counterReducer(//실행시키고 싶은 함수
state:{value:number},//상태값 전달받는 변수
action:{type:string,payload:number}//({type,payload}로 주로 구성)
//type과 payload는 jsx에서 countDispatch로 이함수 불러올때 매개변수로 전달
){//action의 type:switch에 사용하는 값(ex)"INCREMENT","RESET"...) / payload:state값 변경시킬때 쓰는 데이터
switch(action.type){
case ...
}
}
//reducer폴더에 counter.reducer.tsx파일 속에 저장

function Reducer(){
const [count,countDispatch]=useReducer(counterReducer,{value:0});//useReducer(상태함수,초기값(상태함수의 state변수에들어감))
//count는 상태값, {value:0}으로 초기화된 후 counterReducer의 state에 들어감
//countDispatch는 액션발생 함수, counterReducer를 불러옴(수정은 불가) 
return(
<>
<button onClick={()=>countDispatch({type:"INCREMENT",payload:5})}//counterReducer함수 실행시키고싶을때 사용
</>);
} ==>counterReducer함수를 실행하고 싶을때 방법
//components의 Reducer.tsx파일 속에 저장
*/

/*이외의 훅:
useId 훅: 고유한 id생성할 때 사용

useLayout 훅: useEffect 훅과 거의 동일, useEffect는 컴포넌트 렌더링 후 실행, useLayoutEffect는 컴포넌트 렌더링 전에 동기적 실행
            => 예를 들어 0으로 초기화된 count값을 10으로 jsx에서 바꾼후(버튼 클릭시 바뀌도록) setCount(0)을 훅 함수 내부에서 수행하도록 한다면?
            => useEffect는 0->(버튼클릭시)10->(자동으로)0 과정을 보게됨(렌더링 후 함수 실행) / useLayoutEffect는 0만 보게됨(렌더링 전 함수 이미 실행)
useDeferredValue 훅: 상태값 업데이트 우선순위를 낮춰줌 =>렌더링이 끊기지 않도록 해줌
(React 18에서 도입됨)
const deferredValue = useDeferredValue(input); 후 filter로직에 넣어줌으로서(기존값들과 현재값 비교할때 현재값 넘겨줄때 걸어줌) 렌더링 딜레이시켜줌.

useTransition 훅:useDeferredValue와 비슷하나 로직 구현의 우선순위를 낮춰줌
const [isPending, startTransition] = useTransition();로 사용
isPending:상태 업데이트의 지연여부(jsx에서 사용)
startTransition:상태 업데이트 지연 함수
*/

//메모이제이션: useCallBack,React.Memo,useMemo
//React.Memo:컴포넌트 메모이제이션
//useMemo:값을 메모이제이션
//useCallback:함수 메모이제이션
//컴포넌트는 부모컴포넌트 리렌더링될때, props 변경될때, state 변경될때 리렌더링

/*useCallback
//컴포넌트 리렌더링 시 함수 새롭게 생성 방지(함수에 사용)
  =>주소값을 메모리에 저장했다가 사용
//useCallback(()=>{},[의존성배열]) 형태
  => 의존성 배열 값이 업데이트될때 함수를 새로 생성함

const increment=useCallback(()=>{setCount((count)=>count+1);},[]);

*/

/*useMemo
//값을 메모이제이션할때 사용 
//복잡한 계산식 결과, 자식 컴포넌트에 prop으로 값넘길때 불필요한 렌더링 막을때 ... 사용
useMemo({함수의리턴값},[]);
ex)const A=useMemo(()=>items.find((item)=>item.selected),[]);
//남용시 비용 많이듬,가독성 떨어짐, 잘못된 의존성 배열->버그발생가능, 불필요한 최적화할수도
*/

/*React.memo
//매개변수로 컴포넌트를 받아 렌더링 결과값을 메모리에 저장,
//props 변경사항이 없다면 리렌더링 되지 않고 저장된 값 사용 , 자식도 리렌더링 x
const ChildA=React.memo(function ChildA(){
    const [count,setCount]=useState(0);
    return(
    <>
        <button onClick={()=>{setCount((count)=>count+1);}}>
        Increment Count
        </button>
    </>
    );
});
루트함수의 jsx에서 <ChildA/>로 사용
*/
