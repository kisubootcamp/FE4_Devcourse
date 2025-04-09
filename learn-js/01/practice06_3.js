{
  //문자열 압축
  const zipString = (str) => {
    const strArr = [...str];
    const result = [];
    let count = 1;

    strArr.forEach((s, i) => {
      if (i + 1 !== strArr.length) {
        //마지막이 아닐때
        if (strArr[i] !== strArr[i + 1]) {
          // 다음요소와 다르다면 결과값 배열에 넣고 count 리셋
          result[result.length] = `${strArr[i]}${count}`;
          count = 1;
        } else {
          // 다음요소와 같다면 count증가
          count++;
        }
      } else {
        // 마지막일때 비교할 값이 없기 때문에 위에서 계산된값만 넣어주기
        result[result.length] = `${strArr[i]}${count}`;
      }
    });
    return result.join("");
  };

  const i = "aaabbbccc"; //a3b3c3
  console.log(zipString(i));

  const i2 = "aabbaa"; //a2b2a2
  console.log(zipString(i2));

  const i3 = "abbbffd"; //a1b3f2d1
  console.log(zipString(i3));

  const i4 = "aabaa";
  const o4 = "a2b1a2"; // a4b1
}

{
  // 2.팰린드롬 확인하기(쉬운 버전)
  const isPalindrome = (str) => {
    const origin = [...str];
    const reverse = [];
    let result = true;
    origin.forEach((s, i) => {
      reverse[i] = origin[origin.length - 1 - i];
    });
    reverse.forEach((s, i) => {
      if (reverse[i] === origin[i]);
      else {
        result = false;
      }
    });
    return result;
  };
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  console.log(isPalindrome("level")); // true
  console.log(isPalindrome("world")); // false
}
{
  //3.펠린드롬 확인하기 (어려운 버전)
  const isPalindromeSentence = (str) => {
    const reg = new RegExp(/[a-zA-Z]+/, "g");
    const str2 = str.match(reg).join("").toLowerCase();

    const origin = [...str2];
    const reverse = [];
    let result = true;
    origin.forEach((s, i) => {
      reverse[i] = origin[origin.length - 1 - i];
    });
    reverse.forEach((s, i) => {
      if (reverse[i] === origin[i]);
      else {
        result = false;
      }
    });
    return result;
  };
  console.log("S-", isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
  console.log("S-", isPalindromeSentence("Was it a car or a cat I saw?")); // true
  console.log("S-", isPalindromeSentence("Hello, world!")); // false
  console.log("S-", isPalindromeSentence("No 'x' in Nixon")); // true
}

{
  // 4.최대 공약수(GCD)
  const gcd = (num1, num2) => {
    let num1Arr = cd(num1);
    let num2Arr = cd(num2);
    let sameArr = [];
    let long;
    let short;

    if (num1Arr.length > num2Arr.length) {
      long = num1Arr;
      short = num2Arr;
    } else {
      long = num2Arr;
      short = num1Arr;
    }

    long.forEach((n, i) => {
      short.forEach((n2, j) => {
        if (n === n2) {
          sameArr[sameArr.length] = n;
        }
      });
    });

    console.log(sameArr[sameArr.length - 1]);
  };
  // 공약수
  const cd = (num) => {
    let result = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) result[result.length] = i;
    }
    return result;
  };
  gcd(56, 98); // 14
  gcd(101, 10); // 1
  gcd(15, 5); // 5
  gcd(100, 75); // 25
  gcd(18, 24); // 6
}

{
  // 5.배열 정렬(버블 정렬)
  const bubbleSort = (arr) => {
    let resultArr = [...arr];
    for (let i = 0; i <= arr.length - 1; i++) {
      for (let j = 0; j <= arr.length - 1; j++) {
        if (resultArr[i] < resultArr[j]) {
          let thum = resultArr[j];
          resultArr[j] = resultArr[i];
          resultArr[i] = thum;
        }
      }
    }
    return resultArr;
  };
  console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
  console.log(bubbleSort([5, 4, 8, 1, 9]));
  console.log(bubbleSort([9, 6, 4, 1, 2]));
}
