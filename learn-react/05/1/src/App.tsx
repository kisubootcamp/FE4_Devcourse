import Login from './components/Login';
import Sign from './components/Sign';

export default function App() {
    return (
        <>
            <div className="flex gap-20 m-10">
                <Login />
                <Sign />
            </div>
        </>
    );
}
