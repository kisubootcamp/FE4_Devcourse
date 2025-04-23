/*
1.useState 예시
const changeHandler = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
     setText(e.target.value);
   };
////////
<input type="text" value={text} onChange={changeHandler}/>

//onChange={입력값 업데이트하는 함수(useState이용해서 상태 업데이트 함수에 e.target.value 값으로 업데이트)}
//이벤트 객체로 상태 변수를 업데이트 시킴=>상태변수를 jsx에 활용

1.1. 일반 input
1.2. checkbox-다중 선택이 전제
//map,filter=>조건을 만족하는 새로운 배열을 생성
//사용이유: set함수와 함께 사용되는 값은 값 자체가 불변=>새로운 배열을 만들어서 업데이트해야함
//ex)배열에 입력받은 값이 이미 있으면 제외, 없으면 추가 (토글처럼)
setSelectedFruits(
      (selectedFruits) =>
        selectedFruits.includes(value)
          ? selectedFruits.filter((fruit) => fruit !== value) //value가 이미 있다면 value를 제외시킨 새로운 배열 생성하여 리턴
          : [...selectedFruits, value] //value가 없다면 기존 값에 value추가
    );

1.3. radio-단일 선택이 전제
jsx의 input태그들 중 name이 같은 input태그끼리 radio 가 묶임(단일 선택이 설정됨)
 const [radio,setRadio]=useState("female"); 처럼 설정해두고 
 jsx에서 input태그의 checked부분에 set***.includes("***(배열)") 처럼 배열속에 값이 존재하는지 t/f로 표시 

 =>checkbox,radio모두 input 태그 안에 type, value,checked,onChange 필수, radio는 name도 있어야함
*/

/*
2. 상태 끌어올리기(state lifting)(props drilling)
count라는 변수를 자식 함수에게 계속 전달해줌(import 자식 파일, jsx에서 count={count}로)
 */

/*3. useRef 훅
값이 변경돼도 리렌더링이 발생하지 않는 변수
3.1. 값은 변하는데 내부에서만 사용하고 리렌더링할 필요는 없을때->굳이 useState사용하지 않아도 됨
=>useRef 훅 사용
cnt.current로 현재 값 가져옴, ,jsx에서는 변경사항이 반영되지 않음

3.2. JSX 요소를 참조하는 경우
const emailRef=useRef<HTMLInputElement>(null); //useRef
const isSubmitting=useRef(false); //jsx에서는 초기값만 사용가능
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;
    if (!email) {
      alert("이메일을 입력해주세요");
      // (
      //   document.querySelector("input[type='text']") as HTMLInputElement
      //   //리액트는 가상돔을 사용하고 있음에도 이 쿼리셀렉터는 오리지널 돔을 접근하고있다=>권장되지않음
      // ).focus();
      emailRef.current?.focus(); //이메일 입력이 없는경우 참조가 존재하면 커서깜박이도록
      return;
    }
<input>태그의 ref 속성사용
 <input
        ref={emailRef}
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
/> 처럼 사용

*/

/*
react 18버전에서의 사용(input 함수를 forwardRef<HTMLInputElement,InputProps>(props,ref)()로 감쌈, ref={ref}추가)
*/
