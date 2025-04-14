이중 반복문이 아니라
잃어버린 학생으로만 반복문 돌면서
빌려줄 수 있는 학생이 있는지 확인하고 있으면 증가시키면 되지 않을까요?
잃어버린 학생으로만 반복문 돌면서
빌려줄 수 있는 학생이 있으면,
카운트 증가시키고 빌려줄 수 있는 학생 배열에서 그 학생 번호 제거.


console.log(solution(5, [2, 4], [2, 3, 5]));


function solution(n, lost, reserve) {
  let current = 0;
  let reserved = [];
  let getItem = [];
  let lostStu = lost.filter((c) => !reserve.includes(c));
  let reserveStu = reserve.filter((b) => !lost.includes(b));
  
  for (let i = 0; i < reserveStu.length; i++) {
    for (let j = 0; j < lostStu.length; j++) {
      if (
        (lostStu[j] - 1 === reserveStu[i] || lostStu[j] + 1 === reserveStu[i]) &&
        !reserved.includes(reserveStu[i]) &&
        !getItem.includes(lostStu[j])) {
        reserved.push(reserveStu[i]);
        getItem.push(lostStu[j]);
        current++;
          break;
      }
    }
  }
  return n - (lostStu.length - current);
}
console.log(solution(5, [2, 4], [2, 3, 5]));