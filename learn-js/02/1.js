// 객체
// this 개념
// 그 외의 this -> 나를 호출한 객체
// 단축 속성명
// 단축 함수
// 스코프? 실행 컨텍스트 내부의 영역

const obj = {
  name: 'sucoding',
  smallObject: {
    name: '프로그래머스',
    run: function () {
      console.log(this);
    }.bind({ name: '수코딩' }),
  },
};
obj.smallObject.run();
