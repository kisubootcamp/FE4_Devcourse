export default function Button({
  type,
  children,
}: {
  type: "submit" | "reset" | "button" | undefined; // 왜 나는 undefined까지 뜨지...???
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 
        [ 컨텐츠가 있는 문법 ]
          - html의 컨텐츠? : <시작태그> ... </종료 태그> 시작 태그와 종료 태그 사이에 있는 것

        [ 컨텐츠가 없는 문법 ]
        
        바꾸려는 부분 : button의 컨텐츠
        react에서는 컨텐츠 바꿀 때 좀 더 효율적으로 데이터를 전달해서 대체하기를 권장함 (👀)

        children 방법 : 컴포넌트에 컨텐츠를 전달하는 방법 (예약된 속성명이라 prop명으로는 사용할 수 없음 -> 타입에러)
          - 타입 : React.ReactNode
          - html tag, component, text, image 등 다양한 형식을 children으로 넘길 수 있음
       */}
      <button type={type}>{children}</button>
    </>
  );
  
}
