export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* React.ReactNode -> 리액트에 모든것을 다 수용해준다. */}
            {/* 콘텐츠가 있는 문법 */}
            {/* <시작태그>...</종료태그> */}

            {/* 콘텐츠가 없는 문법 */}
            {/* children -> 컴포넌트에 콘텐츠를 전달하는 방법 */}
            <button>{children}</button>
        </>
    );
}
