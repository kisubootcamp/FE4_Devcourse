export default function User({
    message,
    count,
    isVisible,
    tags,
    user,
    myFunction,
    greet,
}: UserProps) {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <>
            <h1>{message}</h1>
            <h1>{count}</h1>
            <h1>{isVisible.toString()}</h1>
            <h1>{JSON.stringify(tags, null, 2)}</h1>
            <h1>{JSON.stringify(user, null, 2)}</h1>
            {/* 매개변수가 없는 함수 : 참조 함수 형태 */}
            <input type="text" onChange={changeHandler}></input>
            {/* 매개변수가 있는 함수 : 콜백 함수 형태 */}
            <button onClick={() => myFunction("안녕하세요")}>클릭2</button>
            <button onClick={(e) => greet(e)}>greet</button>
        </>
    );
}

/* 기본 */
// export default function User(props: {
//     message: string;
//     count: number;
//     isVisible: boolean;
//     tags: string[];
//     user: { id: number; name: string };
// }) {
//     return (
//         <>
//             <h1>{props.message}</h1>
//             <h1>{props.count}</h1>
//             <h1>{props.isVisible.toString()}</h1>
//             {/* json 문자열로 변환해주는 메소드 : (대상(필수), null, 요소간의 간격) */}
//             <h1>{JSON.stringify(props.tags, null, 2)}</h1>
//             <h1>{JSON.stringify(props.user, null, 2)}</h1>
//         </>
//     );
// }

/* 구조분해 할당 */
// export default function User({
//     message,
//     count,
//     isVisible,
//     tags,
//     user,
// }: {
//     message: string;
//     count: number;
//     isVisible: boolean;
//     tags: string[];
//     user: { id: number; name: string };
// }) {
//     return (
//         <>
//             <h1>{message}</h1>
//             <h1>{count}</h1>
//             <h1>{isVisible.toString()}</h1>
//             <h1>{JSON.stringify(tags, null, 2)}</h1>
//             <h1>{JSON.stringify(user, null, 2)}</h1>
//         </>
//     );
// }

/* 인터페이스, 타입별칭 사용 */
// ~Props 형태로 많이 사용한다.
// - 보통 단일객체나 유니온타입만 타입별칭을 사용한다.
// - 하지만 강사님은 타입별칭을 선호한다.
// interface UserProps {
//     message: string;
//     count: number;
//     isVisible: boolean;
//     tags: string[];
//     user: { id: number; name: string };
// }
//
// export default function User({
//     message,
//     count,
//     isVisible,
//     tags,
//     user,
// }: UserProps) {
//     return (
//         <>
//             <h1>{message}</h1>
//             <h1>{count}</h1>
//             <h1>{isVisible.toString()}</h1>
//             <h1>{JSON.stringify(tags, null, 2)}</h1>
//             <h1>{JSON.stringify(user, null, 2)}</h1>
//         </>
//     );
// }

/* 이벤트 */
// html 태그에서 사용할 수 있는 이벤트 속성
// 대표적으로 onclick이 있다.
// https://www.w3schools.com/jsref/event_onbeforeprint.asp 여기서 모든 이벤트를 확인할 수 있다

// 표현식: 값으로 표현될 수 있는 식
