{
  //인터섹션 타입 & (앰퍼샌드)
  // 앰퍼샌드를 이용한 타입을 인터섹션 타입이라고 한다.

  let value: string | number; // 숫자,문자
  let value2: string & number; // ?? string & number 참

  // 객체일때 인터섹션 연산자가 동작함.
  // 양쪽의 타입을 모두 만족할때 참이다.
  let value3: { name: string } & { age: number };
  value3 = {
    name: 'sucoding',
    age: 20,
  };
}

{
  // 실무에서는 String, Number. Boolean 이렇게 안쓴다.
  // 원시타입 형태로 string,number,boolean 이렇게 적어야한다
  let value: String = 'A';
  value = new String('a');

  let value2: string = 'A';
  value2 = new String('a');
}
