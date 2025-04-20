// numArr 배열 순회 -> 4번 순회 -> 항상 10 리턴 -> 각각 10이 들어있는 새로운 배열
// map은 원래 배열의 길이만큼 반복해서 콜백의 리턴값으로 새 배열을 만든다.

const numArr = [1, 2, 3, 4];
const numArr2 = numArr.map(() => 10);
console.log(numArr2); // [ 10, 10, 10, 10 ]

const arr = [1, 2, 3, 4];
const arr2 = arr.map((num) => num * 2);
console.log(arr2); // [ 2, 4, 6, 8 ]
