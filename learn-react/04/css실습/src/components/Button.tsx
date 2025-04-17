export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 콘텐츠가 있는 문법 */}
      {/* <시작태그> .... </종료태그> */}

      {/* 콘텐츠가 없는 문법 */}
      <button>{children}</button>
    </>
  );
}
// export default function Button({ text }: { text?: string }) {
//   return (
//     <>
//       {/* 콘텐츠가 있는 문법 */}
//       {/* <시작태그> .... </종료태그> */}

//       {/* 콘텐츠가 없는 문법 */}
//       <button>{text || '클릭'}</button>
//     </>
//   );
// }
