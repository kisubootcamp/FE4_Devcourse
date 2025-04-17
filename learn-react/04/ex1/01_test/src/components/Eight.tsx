export default function Eight({ value }: { value: string | number | unknown[] }) {
    return (
        <>
            <h1>{JSON.stringify(value, null, 2)}</h1>
        </>
    );
}
