import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";

export default function Count({
    count,
    subCount,
    clearCount,
    addCount,
}: {
    count: number;
    subCount: () => void;
    clearCount: () => void;
    addCount: () => void;
}) {
    return (
        <>
            <CountDisplay count={count} />
            <CountButton
                subCount={subCount}
                clearCount={clearCount}
                addCount={addCount}
            />
            <hr />
        </>
    );
}
