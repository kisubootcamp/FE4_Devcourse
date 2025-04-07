//구조분해
const {
  id, pofile : {name,age,gender}} = {
  id:1,
  profile: {
    name:"이준호",
    age:"30",
    gender:"male",
  }
}

//아규먼트로 구조분해 받아서 사용
function printInfo({name,age}){
  console.log(`${name},${age}`);
}
printInfo({name:"준호",age:20})

//계산 된 속성
const key = 'name';
const user = {
  //객체의 키를 변수로 치환
  [key] : '이준호',
}
console.log(user.name);

//스프레드 문법은 얕은 복사이다
const colors =["빨강","초록","파랑"];
//얕은 복사
const copyColors = [...colors];
//깊은 복사 : structuredClone(arr)
const deepCopyColors = structuredClone(colors);
//깊은 복사 : json형태로 만든 후 다시 js 코드로 변형
const deepCopyColor = JSON.parse(JSON.stringify(colors));