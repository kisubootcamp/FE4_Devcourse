// export default function Four({ object }: { object: { name: string; age: number } }) {
//     return (
//         <>
//             <h1>{JSON.stringify(object, null, 2)}</h1>
//         </>
//     );
// }

export default function Four({ object }: { object: { name: string; age: number } }) {
    return (
        <>
            <h1>{object.name}</h1>
            <h1>{object.age}</h1>
        </>
    );
}
