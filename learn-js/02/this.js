//this -> this는 나를 호출한 객체이다
const obj = {
  name: 'sucoding',
  smallObject: {
    name: '프로그래머스',
    run: function () {
      console.log(this.name); // 프로그래머스
    }.bind({ name: '남윤서' }),
    run2() {
      console.log(this);
    },
  },
};
// 나를 호출한 객체다. 즉 smallObject를 말함
obj.smallObject.run();

// bind 에 대해서는 다시 알아보기

const user = {
  run: function () {},
  // 단축함수
  // *** 이걸 쓰면 bind를 쓸 수 없다.
  run2() {},
};
