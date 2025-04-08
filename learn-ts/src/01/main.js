// 1. 템플릿 문자열 

const myName = "sucoding";
const greet = `Hello ${myName}`;

// 2. 화살표 함수
function sum(a, b) {
    return a + b;
}

const sum =  function sum(a, b) {
    return a + b;
}

const sum = (a,b) => {
    return a + b;
}

const sum = (a, b) => a + b;

// 3. 구조분해
// 배열에서의 구조분해
const [apple, banana, orange] = ["apple", "banana", "orange"];
console.log(apple);
console.log(banana);
console.log(orange);

const [a, ...rest] = ["apple", "banana", "orange"];
console.log(a);
console.log(rest);

// 객체에서의 구조분해
const { animalName:aname, animalType, animalAge, animalGender } = {
    animalName: "곰이",
    animalType: "고양이",
    animalAge: 10,
    animalGender: "male",
};

console.log(aname);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

const { 
    id, 
    profile: { name, age, gender }
} = {
    id: 1,
    profile: {
        name: "곰이",
        age: 20,
        gender: "male",
    }
};

console.log(age);


// 구조분해를 이용한 호출
function printInfo({ name, age }) {
    console.log(`${name}, ${age}`);
}

printInfo({
    name: "sucoding",
    age: 20,
});

// 4. 계산된 속성
// 객체의 키를 변수로 치환
const key = "name";
const user = {
    [key]: "sucoding",
};
console.log(user.name);

//5. 스프레드 연산자
const [red, ...restColor] = ["red", "blue", "green"];

console.log(red);
console.log(restColor);

const { name, ...restProperty} = {
    name:"sucoding",
    age: 20,
    gender: "male",
};

console.log(name);
console.log(restProperty);
// 깊은 복사처럼 보이는 얕은 복사 -> 얕은복사(shallow copy)

const colors = ["red", "orange", "banana", { special: "pink" }];

// const copyColors = [...colors]; 
// const copyColors = JSON.parse(JSON.stringify(colors));
const copyColors = structuredClone(colors);

copyColors[3].special = "grey";
copyColors[0] = "violet";

console.log(colors);
console.log(copyColors);
