export default function Five({ isLoggedIn }: { isLoggedIn: boolean }) {
    return (
        <>
            <h1>{isLoggedIn ? '로그인됨' : '로그인안됨'}</h1>
            <h1>{isLoggedIn.toString()}</h1>
        </>
    );
}
