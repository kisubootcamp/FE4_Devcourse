import User from "./components/User";

export default function App() {
    const myFunction = (message: string) => {
        alert(message);
    };

    const greet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e);
        console.log(e.nativeEvent);
    };

    return (
        <>
            <User
                message="안녕하세요"
                count={10}
                isVisible={true}
                tags={["react", "ts", "js"]}
                user={{ id: 1, name: "하영" }}
                myFunction={myFunction}
                greet={greet}
            />
        </>
    );
}
