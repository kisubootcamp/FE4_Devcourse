const numArr = [1, 2, 3, 4];
const numArr2 = numArr.map((num) => `<li>{num}</li>`; // 2배 한 배열
console.log(numArr2);
// 반복 렌더링 + 새로운 값 지정
