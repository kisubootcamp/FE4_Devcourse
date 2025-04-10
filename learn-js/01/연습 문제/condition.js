//1
/*
학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/
{
  function getGrade(score) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}

//2
{
  let num = 19;
  num % 2 === 0 ? console.log("Even") : console.log("Odd");
}

//3
{
  let isLoggedIn = true;
  let isAdmin = false;
  if (isLoggedIn) {
    if (isAdmin) {
      console.log("Welcome, admin! 🔑");
    } else {
      console.log("Access denied 🔒");
    }
  } else {
    console.log("Please Login");
  }
}

//4
{
  let a = 8;
  let b = 11;
  a > b
    ? console.log("a is greater")
    : b > a
    ? console.log("b is greater")
    : console.log("a and b equal");
}

//5
{
  function getSeason(month) {
    switch (month) {
      case 12:
      case 1:
      case 2:
        return "Winter";
      case 3:
      case 4:
      case 5:
        return "Spring";
      case 6:
      case 7:
      case 8:
        return "Summer";
      case 9:
      case 10:
      case 11:
        return "Fall";
      default:
        return "Invalid month";
    }
  }

  let month = 8;
  console.log(getSeason(month));
}

//6
{
  let amount;
  let total = 0;
  if (amount >= 100000) {
    total = amount - amount * 0.2;
  } else if (amount >= 50000 && amount < 100000) {
    total = amount - amount * 0.1;
  }
}

//7
{
  const day = 7;
  function whatDayToday(today) {
    const days = [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일",
    ];
    return days[today - 1];
  }
  console.log(whatDayToday(day));
}

//8
{
  const num2 = 10;
  num2 > 0
    ? console.log("양수")
    : num2 < 0
    ? console.log("음수")
    : console.log("0");
}
