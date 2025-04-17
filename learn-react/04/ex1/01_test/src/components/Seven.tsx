export default function Seven({ name = '홍길동' }: { name?: string }) {
    return (
        <>
            <h1>{name}</h1>
        </>
    );
}

// export default function Seven(props: { name?: string }) {
//     return (
//       <>
//         <h1>{props.name || "홍길동"}</h1>
//       </>
//     );
//   }
