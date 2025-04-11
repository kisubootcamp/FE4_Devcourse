function solution(n, lost, reserve) {
  // 오름차순 정렬
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 도난 당했지만 여벌이 있는 학생은 빌려줄 수 없으므로 제거
  let _lost = lost.filter((student) => !reserve.includes(student));
  let _reserve = reserve.filter((student) => !lost.includes(student));

  // 기본적으로 체육수업을 들을 수 있는 학생 수
  let answer = n - _lost.length;

  // 여벌 체육복이 있는 학생들이, 순서대로 인접한 학생에게 빌려주기
  for (let student of _lost) {
    let index = _reserve.findIndex((r) => r === student - 1);
    if (index >= 0) {
      _reserve.splice(index, 1); // 체육복 빌려주기
      answer++;
    } else {
      index = _reserve.findIndex((r) => r === student + 1);
      if (index >= 0) {
        _reserve.splice(index, 1); // 체육복 빌려주기
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
