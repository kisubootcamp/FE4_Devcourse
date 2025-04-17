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
//             {/* 원형데이터 그대로 가져올수있음 JSON.stringify(호출할것,필터,간격) */}
//             <h1>{JSON.stringify(props.tags, null, 2)}</h1>
//             <h1>{JSON.stringify(props.user, null, 2)}</h1>
//         </>
//     );
// }

// 구조분해 할당
// interface User {
//     id: number;
//     name: string;
// }
// interface UserProps {
//     message: string;
//     count: number;
//     isVisible: boolean;
//     tags: string[];
//     user: User;
// }

// ***Props ->컨포턴트이름Props(취향에따라 이름짓기)
// 예시->UserProps

// d.ts
// declaration file
// 자바스크립트 라이브러리나 모듈에 대한 타입 정보를 타입스크립트에 제공하기 위해 사용하는 파일 형식
// export default function User({ message, count, isVisible, tags, user }: UserProps) {
//     return (
//         <>
//             <h1>{message}</h1>
//             <h1>{count}</h1>
//             <h1>{isVisible.toString()}</h1>
//             <h1>{JSON.stringify(tags, null, 2)}</h1>
//             <h1>{JSON.stringify(user, null, 2)}</h1>
//             {/* 원형데이터 그대로 가져올수있음 JSON.stringify(호출할것,필터,간격) */}
//         </>
//     );
// }

// 이벤트
// 이벤트 속성 HTML 태그에서 사용할 수 있는 이벤트
export default function User({
    message,
    count,
    isVisible,
    tags,
    user,
    myFunction,
    greet,
}: {
    message: string;
    count: number;
    isVisible: boolean;
    tags: string[];
    user: { id: number; name: string };
    myFunction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, message: string) => void;
    greet: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
    // const myFunction = (message: string) => {
    //     alert(message);
    // };

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

            <button onClick={(e) => greet(e)}>greet</button>
            {/* 매개변수가 필요하면 onClick={() => {myFuncion();}} 
                필요없으면 {myFuncion} */}
            <button
                onClick={(e) => {
                    myFunction(e, 'Hello');
                }}
            >
                클릭
            </button>
            {/* <input type="text" onChange={changeHandler} /> 
                타입추론으로 밑에거처럼쓰면 타입이 추론되서 나온다.
                그후 위의 코드로 돌려두면된다.
            */}
            <input type="text" onChange={(e) => changeHandler(e)} />
        </>
    );
}
