// 자바스크립트

//1. 템플릿 문자열 - 문자열 변수를 포함시킬때 조금 더 직관적이고 편하게 사용하기 위한 기능
// 1.1 백틱(`) 문자열을 정의하는 방법
const myname = "sojeong"
const hello = `Hello, ${myname}`;
console.log(hello);


// 2. 화살표 함수
// 2.1 함수를 화살표를 사용해서 정의하는 방법
//// 2.2.2 함수 선언문
function sum1(a, b){
    return a+b;
}

// 2.1.2 함수 표현식
const sum2 = function sum (a,b){
    return a+b;
}

// 2.1.3 화살표 함수
const sum3 = (a, b) => {
    return a+b;
}
const sum4 = (a,b)=>a+b;


// 3. 구조 분해 할당(비구조화 할당)
//3.1 분해해서 할당하겠다.
// [apple , , orange] => 할당 변수가 없으면 생략된다.
const [apple, ...rest] = ["apple","banana","orange"];
console.log(apple); // apple
console.log(rest); // [banana, orange]
console.log(rest[1]); //orange 

const user1 = {};
[user1.name , user1.surname] = "Cho soejeong".split(" ");
console.log(user1.name)

// 3.2 객체에서의 구조분해 할당
// 배열과 다르게 객체 구조 분해시 변수 이름을 동일하게 적어주어여 한다.
// 아니면 콜론을 사용하여 새로운 이름 지정
const {animalName : aname, animalType, animalAge, animalGender} = {
    animalName : "곰이",
    animalType : "고양이",
    animalAge : 10,
    animalGender : "male",
}
console.log(aname);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);


const {
    id, 
    profile : { name: sname, age, gender}
} = {
    id:1,
    profile:{
        name : "곰이",
        age : 20,
        gender : "male",
    },
}

console.log(id);
console.log(sname, age, gender);



const  {idNum, score : {a, b, c}} = {
    idNum : 1,
    score : {
        a : 10,
        b : 20,
        c : 30,
    }
}
console.log(idNum,a,b,c)


function printInfo({name, age}){ // function printInfo(userObj)
    console.log(`${name}, ${age}`) //console.log(`${userObj.name}, ${userObj.age}`)
}
printInfo({
    name : "sucoding",
    age: 20,
});



// 4. 계산된 속성 => 객체 속성명을 동적으로 결정하는 것.
//4.1 객체의 키를 변수로 치환
const key = "name"
const user = {
    [key] : "sucoding",
};
console.log(user.name);

// 5. 스프레드 연산자
const [red, ...restColor] = ['red', 'blue', 'green'];
console.log(red);
console.log(restColor);

const  {name, ...restProperty} = {
    name: "sucoding",
    age: 20,
    gender: "male",
}

console.log(name);
console.log(restProperty);
// 깊은 복사 처럼 보이는 얕은 복사 -> 얕은 복사

// 깊은 복사(deep copy)
// 얕은 복사(shallow copy)
const colors = ["red","orange","banana", {special: "pink"}];
// const copyColors = [...colors]; // 깊은 복사처럼 보이지만 1중첩이상이면 이후부터 깊은 복사가 되지 않는다.
   const copyColors = structuredClone(colors); // JSON.parse(JSON.stringify(colors));

copyColors[0] = "violet";
copyColors[3].special = "grey";


console.log(colors);
console.log(copyColors);