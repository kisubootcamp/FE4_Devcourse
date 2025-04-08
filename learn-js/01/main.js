document.querySelector('h1').style.color = 'red';
/* 자바스크립트 이용 방법  (면접때 많이 물어본다.)
  
  1. head head 사이에 위치할 때: HTML 파싱을 하다가, js를 다운로드하고 실행시킨 후, 마저 HTML을 파싱한다.
  즉, 웹 페이지를 부를때 js를 다운하는 시간이 더 추가돼서 시간이 걸린다.

  2. body 태그 끝나기 전 지점에 위치할 떄: 전체 HTML 파싱을 다 끝내고, js를 마지막에 파싱한다

  3. aync + head태그 끝나기 전 위치 : HTML 파싱과 js 다운을 동시에 진행하고, 다운로드 된거 먼저 실행시킨다.
  단점 : 
  예)
    <script src="./01/main1.js"></script>
    <script src="./01/main2.js"></script>
    <script src="./01/main3.js"></script>
    이 순서대로 다운을 하고 실행시켜야할 때, 만약에 main2.js가 먼저 다운이 완료된다면 2를 먼저 실행시켜버린다.

  4. defer + head태그 끝나기 전 위치: 모두 병렬로 다운로드 하고, HTML 파싱이 끝난 후 코드 순서대로 실행한다.
  현재는 이게 가장 일반적인 방법
  (defer를 사용하면 DOMContentLoaded를 안써도 된다. 근데 DOMContentLoaded를 써주면 좋긴하다.
  그냥 defer 써도 써라;;
  )

  aync,defer는 HTML과 JS를 동시에 다운로드한다는 점에서는 같지만, aync는 다운이 완료되는 순서대로 실행하고,
  defer는 파싱이 끝난 후 코드 순서대로 실행한다.
*/

/*
    var,let,const
    - let : 재할당이 가능한 변수
    - const : 재할당이 불가능한 변수
*/
const numArr = [10];
numArr.push(20);
console.log(numArr); // 바뀌는데?

/* 
    기본 자료형
    문자,숫자,논리,undefined,null,symbol,bigint
*/
// bigint:  64비트 부동 소수점 방식으로 숫자를 다루고 있음
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991n);
/*
    참조 자료형
    배열, 함수, 객체
*/

/*
1. 연산자
1.1 산술 연산자
+,-,*,/,%,**

1.2 증감 연산자
++,--
1.3 대입 연산자  (=)
+=, -=,*=,/=,%=,**=  (복합 대입 연산자)

1.4 비교 연산자
동등 ==, 일치 ===, 부등!=, 불일치 !==, ~보다 큰(>), ~보다 크거나 같은(>=), ~보다 작은(<), ~보다 작거나 같은(<=)
일치, 불일치만 써라. 동등과 부등은 거의 쓸 일이 없다.

1.5 삼항 연산자
피연산자1 ? 피연산자2 : 피연산자3

console.log(true ? (false ? 10 : 15) : 20)
이런 2중 중첩이 가능한데, 이상하면 그냥 if문 써라

1.6 논리 연산자
and &&
or ||
not !   (true,false를 바꿔버린다)
// .... 비트 연산자 (x) -> 프런트엔드에서 배우지 않음. 왜? 쓸 일이 없음
*/

/*
조건문
if, switch
표현식으로 조건 처리할 때 -> if
값으로 조건 처리할 때 -> switch
switch는 값만!!!!!


로직 상 문제가 없으면, else if 안쓰고 그냥 if문을 따로따로 써서 가독성을 높여도 된다
*/

// 쇼핑몰에서 자주 쓰는 패턴
// 서울
// 인천, 경기, 강북, 강서 -> 1000
const area = '서울';
let baesonbi = 3000;
switch (area) {
  case '서울':
    baesonbi += 0;
    break;
  case '인천':
    baesonbi += 1000;
    break;
  case '경기':
    baesonbi += 1000;
    break;
  case '강북':
    baesonbi += 1000;
    break;
  case '강서':
    baesonbi += 1000;
    break;
  // 또는 이렇게 해도 된다.
  // case "인천":
  // case "경기":
  // case "강북":
  // case "강서":
  // basonbi += 1000;
  // break;
}
console.log(baesonbi);

/*
함수

*/
