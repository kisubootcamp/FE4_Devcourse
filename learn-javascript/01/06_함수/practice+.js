/* 1. 특정 문자 제거 */
// 주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오.
{
    const removeChar = (str, char) => {
        let result = "";

        for (s of str) {
            if (s !== char) {
                result += s;
            }
        }

        console.log(result)
    }
    removeChar("hello world", "o"); // "hell wrld"
}

/* 2. 배열 요소를 반전 */
// 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.
{
    const reverseArray = (arr) => {
        let result = [];

        for (num of arr) {
            result.unshift(num);
        }

        console.log(result);
    }

    reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
}

/* 3. 특정 숫자 찾기 */
// 주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.
{
    const containsNumber = (arr, num) => {
        for (n of arr) {
            if (n === num) {
                console.log(true);
                return;
            }
        }
        console.log(false);
    }

    containsNumber([1, 2, 3, 4, 5], 5); // true
    containsNumber([1, 2, 3, 4, 5], 7); // false
}

/* 4. 애너그램인지 확인 */
// 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃)
{
    const isAnagrams = (str1, str2) => {
        console.log((str1.split('').sort().join('') === str2.split('').sort().join('')) ? true : false);
    } 

    isAnagrams("listen", "silent"); // true
    isAnagrams("fluster", "restful"); // true
    isAnagrams("rat", "car"); // false
    isAnagrams("aaa", "aaaa"); // false
}

/* 5. 배열에서 두 수의 합 */
// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.
{
    const twiceSum = (arr, num) => {
        let answer = [];

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === num) {
                    answer.push([arr[i], arr[j]]);
                }
            }
        }
        console.log(answer);
    }

    twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
    twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
    twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]
}