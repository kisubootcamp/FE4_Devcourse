// export default function Nine({ style }: { style: { fontSize: string; color: string } }) {
//     return (
//         <>
//             <h1 style={style}>스타일</h1>
//         </>
//     );
// }

export default function Nine({ style }: { style: React.CSSProperties }) {
    return (
        <>
            <h1 style={style}>스타일</h1>
        </>
    );
}
// React.CSSProperties -> css속성이 들어오면 통과시켜준다.
