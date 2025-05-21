interface User {
  id: number;
  name: string;
}

interface UserProps {
  message: string;
  count: number;
  isVisible: boolean;
  tags: string[];
  user: User;
  myFunction: {message: string} => void;
}
// 다른 코드에서 재사용될 가능성은 낮다.
// 그렇기 때문에 d.ts가 아니라 사용할 파일에서 지정해주는것도 상관 없다.
// 기준을 세우고 사용 방법을 정해야 한다.

// 구조 분해 할당

// JSON.strinify: 배열이나 객체를 JSON문자열 형태로 변환해서 출력. 선택적으로 매개변수 3개까지 가능. 두 번째 매개변수는 null 이외에 사용할 일이 없고, 3번째 매개변수를 사용하기 위해 null을 사용. 3번째는 간격을 지정하기 위해 숫자를 지정

// 타입 지정이 어려우면 빈 데이터를 보내고 오류 메세지에서 나오는 타입을 복사 붙여넣기
// 우회를 하려면 rfc로 초기회를 한 상태여야 한다.
