// //1.
// export default function Child({ message }: { message: string }) {
//   return <>{/* 1.<h1>{message}</h1> */}</>;
// }
// //2.
// export default function Child({ num }: { num: number }) {
//   return (
//     <>
//       <h1>{num}</h1>
//     </>
//   );
// }
// //3.
// export default function Child({ arr }: { arr: string[] }) {
//   return (
//     <>
//       <h1>{arr}</h1>
//     </>
//   );
// }
//4.
// export default function Child({name,age}:{name:string;age:number}){
//   return(
//     <>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </>
//   );
// }
//5.
// export default function Child({isLoggedIn}:{isLoggedIn:boolean}){
//   return(
//     <><h1>{isLoggedIn ? "로그인됨":"로그인 안됨"}</h1></>
//   );
// }
//6.
// export default function Child({ onClick }: { onClick: () => void }) {
//   return (
//    <>
//      <button onClick={onClick}>클릭</button>
//    </>
//  );
// }
//7.
// export default function Child({name="홍길동"}:{name?:string}){
//   return(
//     <>
//       <h1>{name}</h1>
//     </>
//   );
// }
//8.
// export default function Child({
//   value,
// }: {
//   value: number | string | unknown[];
// }) {
//   return (
//     <>
//       <h1>{JSON.stringify(value)}</h1>
//     </>
//   );//unknown은 JSON.stringify로 감싸야 출력가능해짐
// }
//9.
// export default function Child({style}:{style:React.CSSProperties}){
//   return(
//      <><h1 style={style}>Child Component</h1></>
//   );
// }
//10.
// export default function Child({Header,Content,Footer}:{Header:()=>unknown;Content:()=>unknown;Footer:()=>unknown;}){
//   return(
//     <>
//       {Header}
//       {Content}
//       {Footer}
//     </>
//   );
// }
