import One from './components/One';
import Second from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Seven from './components/Seven';
import Eight from './components/Eight';
import Nine from './components/Nine';
import Ten from './components/Ten';

export default function App() {
    const clickProps = (message: string) => {
        console.log(message);
    };

    const style = {
        fontSize: '50px',
        color: 'red',
    };

    function Header() {
        return <header>header</header>;
    }
    function Content() {
        return <main>Content</main>;
    }
    function Footer() {
        return <footer>Footer</footer>;
    }

    return (
        <>
            <One message="Hello, World!" />
            <Second num={42} />
            <Three list={['Apple', 'Banana', 'Cherry']} />
            <Four object={{ name: 'Alice', age: 30 }} />
            <Five isLoggedIn={true} />
            <Six clickProps={clickProps} />
            <Seven />
            <Eight value={21} />
            <Nine style={style} />
            <Ten Header={<Header />} Content={<Content />} Footer={<Footer />} />
        </>
    );
}
