import Login from './components/Login';
import Logout from './components/Logout';

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <Login />
      <Logout />
    </div>
  );
}
