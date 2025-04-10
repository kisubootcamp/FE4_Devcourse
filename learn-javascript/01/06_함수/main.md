# 함수
- 함수는 하나의 특별한 목적을 가지고 코드를 실행하도록 만드는 문법입니다.

## 문법
**함수선언식**
```js
    function func(){}
```

**함수표현식**
```js
    const func = function(){}; //unnamed function 
    const func2 = function sum(){}; //named function
```

**화살표함수**
```js
    const func = () => {};
```

**new Function**
```js
    const newFunc = new Function();
```


## 호출
- 함수는 함수의 이름과 `소괄호()`를 이용해서 호출합니다.


## 매개변수
- 함수는 매개변수를 전달할 수 있습니다.
```js
    function sum(a, b){
        console.log(a + b);
    }   
    sum(10, 20);
```

- 나머지 매개변수(es6)도 사용 가능합니다.
```js
    function sum(...args){
        console.log(args[0] + args[1]);
    }
    sum(10, 20);
```

- 가변인자를 사용할 수도 있습니다.
```js
    function sum(){
        console.log(arguments[0] + arguments[1]);
    }
    sum(10,20);
```