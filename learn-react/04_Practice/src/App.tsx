import {
    $01,
    $02,
    $03,
    $04,
    $05,
    $06,
    $07,
    $08,
    $09,
    $10,
} from "./components/Child";

function Header() {
    return <header>header</header>;
}
function Content() {
    return <main>content</main>;
}
function Footer() {
    return <footer>footer</footer>;
}

export default function App() {
    const onClick = () => {
        console.log("click!");
    };

    const style = { fontSize: "50px", color: "red" };
    return (
        <>
            <$01 str="Hello, World!" />
            <$02 num={42} />
            <$03 arr={["Apple", "Banana", "Cherry"]} />
            <$04 obj={{ name: "Alice", age: 30 }} />
            <$05 bol={true} />
            <$06 func={onClick} />
            <$07 name="Hayoung" />
            <$08 value={[1, "one"]} />
            <$09 style={style} />
            <$10
                Header={<Header />}
                Content={<Content />}
                Footer={<Footer />}
            />
        </>
    );
}
