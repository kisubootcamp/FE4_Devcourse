// 쉬움 1~3번 문제

// 1번 문제
for(let i = 1; i < 10; i++){
  console.log(i);
}

// 2번 문제
let numArr = [10, -10, 20, -30, 40];
numArr.forEach(num => {if(num > 0) console.log(num)});


for(let i = 0; i <= 15; i++){
  if(2 % i === 0) {
    console.log(i + '짝수');
    continue;
  }
  console.log(i + '홀수');
}

// 어려움