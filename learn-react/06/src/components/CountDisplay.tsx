export default function CountDisplay({ count }: { count: number }) {
    return (
        <>
            <h1 className="text-3xl underline">Count: {count}</h1>
        </>
    );
}
