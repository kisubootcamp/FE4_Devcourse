import User from './components/User';

export default function App() {
    const myFunction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, message: string) => {
        alert(message);
    };
    const greet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e);
        console.log(e.nativeEvent);
        // alert(greet);
    };
    return (
        <>
            <User
                message="안녕하세요"
                count={10}
                isVisible={true}
                tags={['react', 'Ts', 'js']}
                user={{ id: 1, name: 'Ty' }}
                myFunction={myFunction}
                greet={greet}
            />
        </>
    );
}
