{
  // const sum = (n1: number | string, n2: number | string): number | string => {
  //   if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
  //   else return `${n1}${n2}`;
  // };

  // 함수 오버로드
  //  함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능
  // 즉, 함수의 매개변수나 반환값이 유니온일때 사용하는 기법 (유니온이 아니면 쓸 필요 없음)
  // 매개변수 타입의 경우의 수를 모두 위에 추가하면
  // 함수 오버로드가 적용된다.
  // 함수 오버로드는 함수 외부를 위한 속성이기 때문에, 안에 if(typeof)는 써줘야한다.

  // 함수 선언문 방식으로 변경
  function sum(n1: number, n2: number): number;
  function sum(n1: string, n2: string): string;
  function sum(n1: string, n2: number): string;
  function sum(n1: number, n2: string): string;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
    else return `${n1}${n2}`;
  }
  const result1 = sum(1.2, 2.3);
  result1.toFixed(0); // result1에는 3.5라는 숫자가 담겨져있지만, toFixed 를 사용하면 에러가 난다.
  //type guard 를 이용하면 가능
  if (typeof result1 === 'number') console.log(result1.toFixed(0));

  const result2 = sum('A', 'B');
}
