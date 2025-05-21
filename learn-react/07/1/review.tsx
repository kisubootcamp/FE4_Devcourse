/*useReducer //문법 복잡하지만 한 함수에 여러 기능이 동시에 들어있으므로 유지보수에 좋음

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
