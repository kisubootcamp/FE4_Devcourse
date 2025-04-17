//자바스크립트는 프로토타입 기반의 언어이다

//생성자 함수
//파스칼 케이스
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
  // this.maxSpeed = function () {
  //   console.log(`Max speed: ${this.speed * 2}`);
  // };
}

console.dir(Car);

//프로토타입은 함수에만 존재한다

//new를 쓰면 함수를 객체화 한다.
//생성자 함수로 찍어낸 객체를 인스턴스라고 부른다.
//인스턴스는 생성자 함수의 프로토타입을 가리키는 프로토타입 속성을 가진다.
const car1 = new Car("bmw", 200);
console.log(car1);
console.log(car1.__proto__.teacher); //생성자 함수의 프로토타입을 가리킨다
//__proto__는 인스턴스에만 존재한다.
//__proto__또한 누군가의 인스턴스다
console.log(car1.teacher); //위 코드와 같다 __proto__ 제외 가능
//프로토타입 체인 : 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
//프로토타입 체인은 상위 프로토타입만 참조 가능하다. 상위 프로토타입은 하위 프로토타입에 접근하지 못한다.
Car.prototype.teacher = "김기수"; //프로토타입 체인
Car.prototype.maxSpeed = function () {
  //프로토타입 체인
  //생성자 함수 내부에서 선언하지 않고 프로토타입 핸들링을 통해 함수 활용하기
  console.log(`Max speed: ${this.speed * 2}`);
};
console.log(car1.maxSpeed());

//fc 오브젝트 객체 -> 생성자 함수 프로토타입 = 생성자 함수 -> 인스턴스 -> 인스턴스는 생성자 함수의 프로토타입을 참조 가능(프로토타입 체인)

//일시적 객체화: 객체나 프로토타입을 가질 수 없는 데이터를 순간적으로 객체화 시키는 것
