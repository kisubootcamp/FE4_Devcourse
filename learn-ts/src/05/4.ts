{
  // 제네릭 타입 제약 조건
  // 모든 타입이 들어갈 수 있는 제네릭 조건에 제약을 걸어
  // extends
  function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  }

console.log(getLength([1, 2])); // ok
  console.log(getLength("abc")); // ok , 래퍼 객체
  // console.log(getLength(10)); // not ok
}

{
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  type PersonOfKeys = keyof Person;
    const key: PersonOfKeys = "gender";
    
    const car = {
        speed: 100,
    };
    type CarOfKeys = keyof 
}

{
    function returnTuple<T, U>(a: T, b: U): [T, U]{
        return ([a, b]);
    }
    const r1 = returnTuple(1, 2);
    const r2 = returnTuple(1, 'a');
}