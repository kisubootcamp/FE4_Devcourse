# 클로저

## 은닉화
```js
    function counter() {
        let count = 0;

        return {
            increment: function () {
                count++;
                return count;
            },
            decrement: function () {
                count--;
                return count;
            },
        };
    }

    const mycount = counter();
    console.log(mycount.increment());
    mycount = null;
```

## 함수 팩토리

```js
    function makeMultiple(multipler) {
        return function (x) {
            return x * multipler;
        };
    }

    const double = makeMultiple(2);
    const triple = makeMultiple(3);

    console.log(double(5)); // 5 * 2
    console.log(triple(5)); // 5 * 3

    double = null;
    triple = null;
```

## 비동기 프로그래밍에서 클로저
```js
    function fetcData(url) {
        let result;

        return function (callback) {
            setTimeout(() => {
                result = "Fetched... Success";
                callback(result);
            }, 1000);
        };
    }

    const fetchFromNaver = fetcData("https://www.naver.com");
    fetchFromNaver((data) => console.log(data));
```

## 메모이제이션 패턴
```js
    function memoization(fn) {
        const cache = {};

        return function (...args) {
            const key = JSON.stringify(args); // JSON 변환 -> 문자열로 취급됨
            if (cache[key]) {
                return cache[key];
            }
            const result = fn(...args);
            cache[key] = result;
            return result;
        };
    }

    function slowFunction(num) {
        for (let i = 0; i < 9999999999; i++);
        return num * 2;
    }

    const memoizedFn = memoization(slowFunction);
    console.log(memoizedFn(5)); // 8
    console.log(memoizedFn(5)); // 
    console.log(memoizedFn(5));
    console.log(memoizedFn(5));
    memoizedFn = null;
```
