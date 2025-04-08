// 1. 템플릿 문자열
// 1.1 백틱(`) 문자열을 정의하는 방법
const uname = "Jocoding"
const greet = `Hello, ${uname}`
console.log(greet);

// 2. 화살표 함수
// 화살표를 사용해서 정의하는 방법
//함수 선언문
function sum1(a, b) {
    return a + b;
};

//함수 표현식
const sum2 = function sum(a, b) {
    return a + b;
};

//함수 표현식
const sum3 = (a, b) =>{
    return a + b;
};

const sum4 = (a, b) => a + b;

// 3. 구조 분해 할당(비구조화 할당)
// 분해해서 할당
console.log("@@@@@기본 배열@@@@@");
const foods = ["apple", "banana", "orange"];
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

console.log("@@@배열 구조 분해@@@");
const [apple, banana, orange] = ["apple", "banana", "orange"];
console.log(apple);
console.log(banana);
console.log(orange);

console.log("@@@배열 구조 분해 rest@@@");
const [a, ...rest] = ["apple", "banana", "orange"];
console.log(a);
console.log(rest);

// 객체에서의 구조분해 할당
console.log("@@@@@기본 객체@@@@@");
const animal = {
    animalName: "택이",
    animalType: "말티즈",
    animalAge: 10,
    animalGender: "남"
}

console.log(animal.animalName);
console.log(animal.animalType);
console.log(animal.animalAge);
console.log(animal.animalGender);

console.log("@@@@@객체 구조 분해@@@@@");
const {animalName: dogname, animalType, animalAge, animalGender} = {
    animalName: "택이",
    animalType: "말티즈",
    animalAge: 10,
    animalGender: "남"
}
console.log(dogname);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

console.log("@@@@@중첩객체 구조 분해@@@@@");
const {id, profile:{dogname1, age, gender}} = {
    id :1,
    profile: {
        dogname1 : "택이",
        age : 10,
        gender : "남"
    }
}
console.log(id, dogname1);

// 4. 계산된 속성
console.log("@@@@@계산된 속성@@@@@");
const key = "userName";
const user = {
    [key] : "mafornp"
}
console.log(user.userName);

// 5. 스프레드 연산자
console.log("@@@@@스프레드 연산자@@@@@");
const [red, ...restColor] = ['red', 'blue', 'green', 'pink'];
console.log(red);
console.log(restColor);

console.log("@@@@@객체에서 스프레드 연산자@@@@@");
const {aname, ...restProperty} = {
    aname:'red', 
    age : 'blue', 
    gender : 'green', 
    zzz : 'pink'
};
console.log(aname);
console.log(restProperty);

// 깊은 복사 처럼 보이는 얕은 복사 -> 얕은 복사
console.log("@@@@@깊은 복사@@@@@");
const colors = ['red', 'blue', 'green', 'pink', {special: "banana"}];
const copyColors = structuredClone(colors);
copyColors[0] = "skyBlue";
copyColors[4].special = "grey";
console.log(colors);
console.log(copyColors);

// 얕은복사(shallow copy), 깊은복사(deepCopy)
// 얕은 복사는 내부 객체(참조값)를 그대로 복사하기 때문에, 복사본을 바꿔도 원본이 함께 바뀜
// 같은 주소값
// 깊은 복사는 아예 새로운 객체를 '완전히 새 주소'로 하나 더 만드는 것
// 다른 주소값

// const copyColors = {...colors};
// 1층 구조만 복사, 내부 객체는 여전히 같은 참조를 공유함
// 얕은 복사는 내부 객체(참조값)를 그대로 복사하기 때문에, 복사본을 바꿔도 원본이 함께 바뀜
// 같은 주소값

// const copyColors = JSON.parse(JSON.stringify(colors));
// 옛날 깊은 복사 방식
// 완전한 깊은 복사가 아님
// function, undefined, symbol, Date, Map, Set, RegExp, 순환 참조 등 복사 안댐
