//컴파일할 부분만 드래그한 후에 실행하면 일부만 컴파일 가능
//1. 템플릿 문자열
//1.1 백틱(`) 문자열을 정의하는 방법, 
const name="sucoding";
const greet=`Hello, ${name}`;

console.log(greet);

// 2. 화살표 함수
// 2.1 함수를 화살표를 사용해서 정의하는 방법
function sum(a,b){
    return a+b;
}

//2.1.2 함수 표현식
const sum=function sum(a,b){
    return a+b;
};

//2.1.3 화살표 함수
const sum=(a,b)=>{
    return a+b;
};

const sum=(a,b)=>a+b;

// 3. 구조 분해 할당(비구조화 할당)
// 3.1 분해해서 할당하겠다.
const [a, ...rest]=["apple","banana","orange"]; //자유롭게 선언 가능
console.log(a); //대괄호 연산자
console.log(rest);

//3.2 객체에서의 구조분해 할당
const animal={
    animalName:"곰이",
    animalType:"고양이",
    animalAge:10,
    animalGender:"male",
}
console.log(animal.animalName);
console.log(animal.animalType);
console.log(animal.animalAge);
console.log(animal.animalGender);
const {
animalName:aname,
animalType,
animalAge,
animalGender} //로 이름 변경 가능 
const {animalName,animalType,animalAge,animalGender}={//객체 이름과 동일하게 매개변수 이름을 지정해야함
    animalName:"곰이",
    animalType:"고양이",
    animalAge:10,
    animalGender:"male",
}

console.log(animalName);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

const animal={
    id:1,
    profile:{
        name:"곰이",
        age:20,
        gender:"male",
    },
};
console.log(animal.profile.age);

// //=>
const {id,profile}={
    id:1,
    profile:{
        name:"곰이",
        age:20,
        gender:"male",
    },
}
console.log(profile.age);
const {
    id, 
    profile: {name:sname,age,gender},
}={
    id:1,
    profile:{
        name:"곰이",
        age:20,
        gender:"male",
    },
};
console.log(sname,age,gender);

function printInfo(userObj){
    console.log(`${userObj.name}, ${userObj.age}`);
}
printInfo({
    name:"sucoding",
    age:20,
});

// 4. 계산된 속성(리액트에서 자주 사용!)
// 4.1 객체의 키를 변수로 치환
const key="name"; 
const user={
    [key]:"sucoding",
};
console.log(user.name);

// 5. 스프레드 연산자
const [red,...restColor]=["red","blue","green"];
console.log(red);
console.log(restColor);

const {name, ...restProperty}={
    name:"sucoding",
    age:20,
    gender:"male",
};

console.log(name);
console.log(restProperty);

//깊은 복사 처럼 보이는 얕은 복사 -> 얕은 복사
//깊은 복사(deep copy)
//얕은 복사(shallow copy)
const colors=["red","orange","banana"];
const copyColors=colors;
copyColors[0]="pink";

console.log(colors[0]); //? pink 복사했는데 color도 바뀜

//const copyColors=[...colors]; 로 하면 복사된 값에서 변경해서 원본은 유지됨

const colors=["red","orange","banana",{special:"pink"}];
const copyColors=[...colors];
copyColors[0]="violet";
copyColors[3].special="grey";

console.log(colors);
console.log(copyColors); //스프레드 연산자는 깊은복사처럼 보이는 얕은복사임 1중첩까지만 깊은 복사 2부터는 얕은복사로 웑본도 수정됨
//const copyColors=structuredClone(colors);로 복사하면 완전히 깊은복사가 됨(최근 추가=>can i use 사이트에서 확인해보고 80%이상이면 사용해도됨)
//const copyColors=JS.parse(JSON.stringfy(colors));는 옛날에 사용하던 깊은복사 방식식