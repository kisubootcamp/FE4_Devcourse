/* 1. 문자열 압축 */
// 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
{
    const stringCompression = (str) => {
        let charCount = [];

        for (char of str) {
            if (charCount.indexOf(char) === -1) {
                charCount.push(char);
                charCount.push(1);
            }
            else {
                charCount[charCount.indexOf(char)+1]++;
            }
        }

        console.log(charCount.join(''));
    }

    stringCompression("aaabbbccc");
    stringCompression("aabbaa");
    stringCompression("abbbffd");
    stringCompression("aabaa");
}

/* 2. 팰린드롬 확인하기(쉬운 버전) */
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요.
// 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 매개변수는 항상 공백 없이 소문자 알파뱃만 넘어온다고 가정합니다.
{
    const isPalindrome = (str) => {
        return str === str.split('').reverse().join('');
    }

    console.log(isPalindrome("racecar")); // true
    console.log(isPalindrome("hello"));   // false
    console.log(isPalindrome("level"));   // true
    console.log(isPalindrome("world"));   // false
}

/* 3. 펠린드롬 확인하기 (어려운 버전) */
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요.
// 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 알파벳 이외의 문자는 무시합니다.
{
    const isPalindromeSentence = (str) => {
        let convertedStr = str.toLowerCase().replace(/[^a-z]/g, '');

        return convertedStr === convertedStr.split('').reverse().join('');
    }

    console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
    console.log(isPalindromeSentence("Was it a car or a cat I saw?"));  // true
    console.log(isPalindromeSentence("Hello, world!"));                  // false
    console.log(isPalindromeSentence("No 'x' in Nixon"));                // true
}

/* 4. 최대 공약수(GCD) */
// 두 정수를 전달 받아서 최대 공약수를 구하는 함수를 구현하세요.
// 최대 공약수는 공통된 약수 중 가장 큰 수를 의미합니다.
// 유클리드 호제법을 이용하세요.
{
    const gcd = (num1, num2) => {
        let big = num1 > num2 ? num1 : num2;
        let small = num1 > num2 ? num2 : num1;

        while (true) {
            let remain = big % small;
            if (remain === 0) {
                console.log(small);
                break;
            }
            big = small;
            small = remain;
        }
    }

    gcd(56, 98); // 14
    gcd(101, 10); // 1
    gcd(15, 5); // 5
    gcd(100, 75); // 25
    gcd(18, 24); // 6
}

/* 5. 배열 정렬(버블 정렬) */
// 주어진 배열을 오름차순으로 정렬하는 함수를 작성하시오.
{
    const bubbleSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j+1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                }
            }
        }

        return arr;
    }
    console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
}