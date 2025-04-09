# 호이스팅
- 호이스팅은 자바스크립트 문법을 선언과 할당으로 구문을 분리하여 선언 부분을 최상위로 끌어올려서 실행하는 특징을 말합니다.
- `let`, `const` 키워드는 호이스팅이 되지 않습니다.


**1. 변수가 선언되기도 전에 참조하여 출력하고 있지만 error가 발생하지 않음**
```js
    console.log(num); //undefined
    var num = 10;
```

**2. 같은 코드인데 let 키워드로 변수 생성시 참조 오류 발생**
```js
    //Uncaught ReferenceError: num is not defined
    console.log(num);
    let num = 10;
```

**3. printName() 함수가 선언도 되기전에 호출하고 있으나 잘 호출됨**
```js
    printName(); // 윤희
    function printName(){
        console.log('윤희');
    }
```

**4. 함수 선언식은 is not a function 오류**
```js
    printName(); // printName is not a function
    var printName = () => {
        console.log("윤희");
    };
```

**5. let 키워드로 선언시 참조 오류**
```js
    //Uncaught ReferenceError: printName is not defined
    printName(); 
    let printName = function(){
    console.log('윤희');
}
```