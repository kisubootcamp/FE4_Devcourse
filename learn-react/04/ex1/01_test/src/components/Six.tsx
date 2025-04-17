export default function Six({ clickProps }: { clickProps: (message: string) => void }) {
    return (
        <>
            <button onClick={() => clickProps('버튼 클릭 시 콘솔에 메시지 출력')}>버튼클릭</button>
        </>
    );
}
