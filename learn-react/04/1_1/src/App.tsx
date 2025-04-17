import Button from './components/Button';
function Text() {
    return <strong>Hello</strong>;
}

export default function App() {
    return (
        <>
            {/* type="button" */}
            <Button>
                <Text />
            </Button>
        </>
    );
}
