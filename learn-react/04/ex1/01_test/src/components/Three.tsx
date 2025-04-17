export default function Three({ list }: { list: string[] }) {
    return (
        <>
            <h1>{JSON.stringify(list, null, 2)}</h1>
        </>
    );
}
