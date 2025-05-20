# 객체

## 1. 객체의 기본 개념
- 자바스크립트에서 객체는 관련된 데이터와 함수(메서드)를 하나의 단위로 묶은 복합 데이터 구조입니다.
- 객체는 `키(key)`와 `값(value)`의 쌍으로 구성된 프로퍼티들의 집합으로, 프로그래밍에서 실세계의 개체를 모델링할 수 있는 유용한 도구입니다.

### 1.1 객체의 특징
**프로퍼티의 집합**
- 객체는 여러 개의 프로퍼티를 가질 수 있으며, 각 프로퍼티는 고유한 키와 값을 갖습니다.

**참조 타입**
- 객체는 기본 데이터 타입(문자열, 숫자 등)과 달리 참조로 관리되므로, 여러 변수에서 같은 객체를 공유할 수 있습니다.

**동적으로 프로퍼티 추가/삭제 가능**
- 객체는 실행 중에 새로운 프로퍼티를 추가하거나 기존 프로퍼티를 삭제할 수 있어 매우 유연합니다.

**키는 문자열 또는 심볼 타입만 가능**
- 프로퍼티의 키는 기본적으로 문자열이거나 심볼이어야 하며, 이는 객체의 프로퍼티 접근 및 조작 시 중요한 규칙입니다.

### 1.2 객체의 기본 구조
```js
    const person = {
        name: 'John',   // 프로퍼티
        age: 30,        // 프로퍼티
        greet() {       // 메서드
            return `Hello, I'm ${this.name}`;
        }
    };
```


## 2. 객체 생성과 프로퍼티
- 자바스크립트에서는 객체를 생성하는 다양한 방법이 있으며, 각 방법에 따라 특징이 다릅니다.

### 2.1 객체 생성 방법

**객체 리터럴**
- 간단한 객체를 빠르게 생성할 때 유용하다.
```js
    const obj1 = {
        property: 'value'
    };
```

**Object 생성자 함수**
```js
    const obj2 = new Object();
```

**생성자 함수**
- 유사한 객체를 여러 개 만들고자 할 때 사용한다.
```js
    function Person(name) {
        this.name = name;
    }
    const obj3 = new Person('John');
```

**Object.create()**
```js
    const obj4 = Object.create(Object.prototype);
```

### 2.2 프로퍼티 접근과 조작
- 자바스크립트에서는 프로퍼티에 접근하고 조작하는 방법이 여러 가지 있습니다.
- 점 표기법과 대괄호 표기법은 각각의 상황에 따라 다르게 사용될 수 있습니다. 특히 프로퍼티 이름에 공백이나 특수문자가 포함된 경우 대괄호 표기법이 필요합니다.
```js
    const user = {
        name: 'John',
        age: 30
    };
```

**프로퍼티 접근**
```js
    console.log(user.name);      // 점 표기법
    console.log(user['name']);   // 대괄호 표기법
```

**프로퍼티 추가**
```js
    user.email = 'john@example.com';
```

**프로퍼티 수정**
```js
    user.age = 31;
```

**프로퍼티 삭제**
```js
    delete user.age;
```


## 3. 객체 메서드와 this
- 자바스크립트 객체는 데이터뿐만 아니라 동작(메서드)도 포함할 수 있습니다. 여기서 `this` 키워드는 메서드가 호출될 때의 컨텍스트를 가리킵니다.

### 3.1 메서드 정의
- 일반 함수와 화살표 함수의 차이점은 `this`의 바인딩 방식입니다.
- 일반 함수는 호출 시의 컨텍스트에 따라 `this`가 결정되지만, 화살표 함수는 자신이 정의된 위치의 `this`를 사용합니다.
```js
    const calculator = {
        // 일반적인 메서드 정의
        add(a, b) {
            return a + b;
        }

        // 화살표 함수와 일반 함수의 차이
        multiply: (a, b) => a * b;

        // this를 사용하는 메서드
        values: [1, 2, 3];
        sum() {
            return this.values.reduce((acc, val) => acc + val, 0);
        }
    };
```


## 4. 객체 순회와 조작
- 객체의 프로퍼티를 순회하고 조작하는 방법은 여러 가지가 있으며, 각 방법은 상황에 따라 유용합니다.

### 4.1 객체 순회 방법
- `for...in` 루프는 객체의 모든 프로퍼티를 순회하지만, 상속된 프로퍼티도 포함될 수 있어 주의가 필요합니다.
- 반면 `Object.keys()`, `Object.entries()`, `Object.values()`는 객체의 직접 프로퍼티만 반환합니다.
```js
const person = {
    name: 'John',
    age: 30,
    job: 'developer'
};
```

**1. for...in**
```js
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
```

**2. Object.keys()**
```js
    Object.keys(person).forEach(key => {
        console.log(`${key}: ${person[key]}`);
    });
```

**3. Object.entries()**
```js
    Object.entries(person).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
```

**4. Object.values()**
```js
    Object.values(person).forEach(value => {
        console.log(value);
    });
```

### 4.2 객체 병합과 복사

**얕은 복사**
- 얕은 복사는 프로퍼티가 참조 타입일 경우, 원본 객체와 복사된 객체가 동일한 참조를 가집니다.
```js
    const original = { a: 1, b: { c: 2 } };
    const shallowCopy = { ...original };
    const shallowCopy2 = Object.assign({}, original);
```

**깊은 복사**
- 깊은 복사는 모든 중첩된 객체를 복사하여 완전히 독립적인 객체를 만듭니다.
```js
    const deepCopy = JSON.parse(JSON.stringify(original));
```

**객체 병합**
```js
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const merged = { ...obj1, ...obj2 };
```


## 5. 객체의 고급 기능

### 5.1 속성 설명자(Property Descriptors)
- 속성 설명자는 객체의 프로퍼티에 대한 메타데이터를 정의할 수 있는 방법입니다.
- 속성 설명자를 사용하면 객체의 프로퍼티에 대한 세부적인 제어가 가능하므로, 프로퍼티를 보다 안전하게 관리할 수 있습니다.
```js
    const person = {
        name: 'John'
    };
```
**속성 설명자 정의**
```js
    Object.defineProperty(person, 'age', {
        value: 30,
        writable: false,     // 값 변경 불가
        enumerable: true,    // 열거 가능
        configurable: false  // 속성 삭제/재정의 불가
    });
```

**여러 속성 한번에 정의**
```js
    Object.defineProperties(person, {
        job: {
            value: 'developer',
            writable: true
        },
        salary: {
            value: 5000,
            writable: false
        }
    });
```

### 5.2 접근자 프로퍼티(Getter와 Setter)
- 접근자 프로퍼티는 객체의 프로퍼티 값을 동적으로 계산하거나 설정할 수 있는 방법입니다.
- 접근자 프로퍼티를 사용하면 객체의 내부 상태를 보호하면서도 외부에서 편리하게 사용할 수 있습니다.
```js
const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.fullName);  // "John Doe"
person.fullName = 'Jane Smith';
```


## 6. 객체 불변성과 최적화
- 객체를 다루는 과정에서 불변성을 유지하는 것은 코드의 안정성과 예측 가능성을 높이는 데 중요한 요소입니다.

### 6.1 객체 불변성 구현

**Object.freeze()**
- 객체를 완전히 변경할 수 없게 한다. = 완전한 불변성
```js
    const frozenObj = Object.freeze({
        prop: 42
    });
```

**Object.seal()**
- 프로퍼티 추가, 삭제 방지
```js
    const sealedObj = Object.seal({
        prop: 42
    });
```

**Object.preventExtensions()**
- 프로퍼티 추가 방지
```js
    const preventObj = Object.preventExtensions({
        prop: 42
    });
```