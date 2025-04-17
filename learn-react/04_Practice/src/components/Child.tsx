import { ReactNode } from "react";

export function $01({ str }: { str: string }) {
    return (
        <>
            <h1>{str}</h1>
        </>
    );
}

export function $02({ num }: { num: number }) {
    return (
        <>
            <h1>{num}</h1>
        </>
    );
}

export function $03({ arr }: { arr: string[] }) {
    return (
        <>
            <h1>{arr}</h1>
        </>
    );
}

export function $04({ obj }: { obj: { name: string; age: number } }) {
    return (
        <>
            <h1>
                {obj.name}, {obj.age}
            </h1>
        </>
    );
}

export function $05({ bol }: { bol: boolean }) {
    return (
        <>
            <h1>{bol ? "로그인 됨" : "로그인 안됨"}</h1>
        </>
    );
}

export function $06({ func }: { func: () => void }) {
    return (
        <>
            <button onClick={func}>click</button>
        </>
    );
}

export function $07({ name = "강하영" }: { name?: string }) {
    return (
        <>
            <h1>{name}</h1>
        </>
    );
}

export function $08({ value }: { value: string | number | unknown[] }) {
    // unknown[]은 그냥 출력이 안된다! : 표현식으로는 정상적으로 렌더링이 되지 않음
    return (
        <>
            <h1>{JSON.stringify(value)}</h1>
        </>
    );
}

export function $09({ style }: { style: React.CSSProperties }) {
    // React.CSSProperties 타입은 속성이 CSS 속성이라면 통과가 되게끔 미리 정의되어있다
    return (
        <>
            <h1 style={style}>Child Component</h1>
        </>
    );
}

export function $10({
    Header,
    Content,
    Footer,
}: {
    Header: ReactNode;
    Content: ReactNode;
    Footer: ReactNode;
}) {
    // ReactNode, React.ReactElement 타입을 사용하지 않고, 타입추론에만 의지하면 계속 오류가 난다.
    // 실제로 실무에서 사용하는 방법은 아니다.
    return (
        <>
            {Header}
            {Content}
            {Footer}
        </>
    );
}
