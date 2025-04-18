# 객체의 속성을 props로 넘겨주는 방법

```jsx
export default function User({
    user,
}: {
    user: { id: number, name: string, age: number },
}) {
    return (
        <>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    );
}
```

```jsx
export default function App() {
    const user = {
        id: 1,
        name: "Hayoung",
        age: 20,
    };

    return (
        <>
            <User user={user} />
            {/* <User id={user.id} name={user.name} age={user.age} /> */}
            {/* <User {...user} /> : 객체데이터에만 쓸 수 있다. 위 코드랑 똑같다!*/}
            {/* 쓰려는 속성만 골라서 지정하면 된다 */}
        </>
    );
}
```

# 조건부 랜더링

-   조건문을 활용해서 조건 랜더링을 수행하는 기법

## if문

```tsx
export default function App() {
    const isLogin = true;

    if (isLogin) {
        return (
            <>
                <h1>User Is Login!</h1>
            </>
        );
    }
    return (
        <>
            <h1>User Is Not Login!</h1>
        </>
    );
}
```

-   컴포넌트로 대체 가능하다.

## 삼항연산자

-   true와 false가 출력하는 것이 다를 때 사용하면 좋다.

```tsx
export default function App() {
    const isLogin = true;

    return (
        <>{isLogin ? <h1>User Is Login!</h1> : <h1>User Is Not Login!</h1>}</>
    );
}
```

## 논리 연산자 &&

```tsx
export default function App() {
    const isLogin = true;

    return (
        <>
            {isLogin && <h1>User Is Login!</h1>}
            {!isLogin && <h1>User Is Not Login!</h1>}
        </>
    );
}
```

# 반복 랜더링

-   반복문을 활용해서 반복 랜더링을 수행하는 기법

**컴포넌트 리스트 사용**

```tsx
export default function App() {
    const items = [<li>apple</li>, <li>banana</li>, <li>orange</li>];

    return <>{items}</>;
}
```

**for문 사용**

```tsx
export default function App() {
    const renderItems = [];
    const items = ["apple", "banana", "orange"];

    for (let i = 0; i < items.length; i++) {
        renderItems.push(<li>{items[i]}</li>);
    }
    return <>{renderItems}</>;
}
```

**map 메소드 사용**

-   기존에 있던 데이터를 반복 렌더링하면서 그때마다 반환된 새로운 값을 배열로 만든다.
-   거의 모든 반복 랜더링에서는 map 매소드를 사용한다.

```js
const arr = [1, 2, 3, 4];
const arr2 = arr.map(() => 10); // [10, 10, 10, 10]
const arr3 = arr.map((num) => num * 2); // [2, 4, 6, 8]
```

-   반복 랜더링을 할때는 고유한 값(key)을 부여해야 한다.
-   피치 못할 사정이 아니면 key값에 index를 넣으면 안된다.
-   실제로는 객체 요소 중 id값이나 고유하게 식별할 수 있는 값을 넣어야 한다.
-   key값은 props로 전달되지 않는다.

```tsx
export default function App() {
    const items = ["apple", "banana", "orange"];

    return (
        <>
            <ul>
                {items.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </>
    );
}
```
