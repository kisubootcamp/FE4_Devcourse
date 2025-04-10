/* 1 */
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
{
    const sum = (a, b, c) => a + b + c;

    console.log(sum(1, 2, 3));
}

/* 2 */
// 사칙연산을 수행하는 로직을 담은 함수를 구현해주세요. (매개변수 - 2개) (+, -, *, /)
// 구현 방법은 자율입니다.
{
    const operations = (a, b) => {
        console.log(`${a} + ${b} = ${a + b}`);
        console.log(`${a} - ${b} = ${a - b}`);
        console.log(`${a} * ${b} = ${a * b}`);
        console.log(`${a} / ${b} = ${a / b}`);
    }

    operations(10, 2);
}

/* 3 */
// 숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
// 함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
{
    const isEven = (num) => (num % 2 === 0) ? true : false;

    console.log(isEven(7) ? "짝수" : "홀수");
}

/* 4 */
// 배열의 모든 요소의 합을 반환하는 함수를 작성하세요.
{
    const sumArray = (arr) => {
        let sum = 0;

        for (num of arr) {
            sum += num;
        }

        return sum;
    }

    console.log(sumArray([1, 2, 3]));
}

/* 5 */
// 배열에서 최대값을 찾는 함수를 작성하세요.
{
    const findMax = (arr) => {
        let max = 0;

        for (num of arr) {
            if (max < num) {
                max = num;
            }
        }

        return max;
    }

    console.log(findMax([1, 5, 3, 9, 2]));
}

/* 6 */
// 주어진 문자열을 반전시켜 반환하는 함수를 작성하세요.
{
    const reverseString = (str) => {
        let reverse = "";

        for (s of str) {
            reverse = s + reverse;
        }

        return reverse;
    }

    console.log(reverseString("hello"));
}

/* 7 */
// 주어진 문자열에서 특정 문자의 개수를 세는 함수를 작성하세요.
{
    const countCharacter = (str, char) => {
        let count = 0;

        for (s of str) {
            if (s === char) {
                count++;
            }
        }

        return count;
    }
    console.log(countCharacter("banana", "a"));
}

/* 8 */
// 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
// 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.
{
    const factorial = (num) => {
        if (num === 1) {
            return 1;
        }
        else {
            return num * factorial(num - 1);
        }
    }

    console.log(factorial(5));
}

/* 9 */
// 삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
// 함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
{
    const triangleArea = (base, height) => base * height / 2;

    console.log(triangleArea(10, 5));
}