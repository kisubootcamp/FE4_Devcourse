export default function CountButton({
    subCount,
    clearCount,
    addCount,
}: {
    subCount: () => void;
    clearCount: () => void;
    addCount: () => void;
}) {
    return (
        <>
            <button onClick={subCount}>감소</button>
            <button onClick={clearCount}>리셋</button>
            <button onClick={addCount}>증가</button>
        </>
    );
}
