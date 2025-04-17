import Button from './components/Button';
import ProfileCard from './components/ProfileCard';

function Text() {
  return <strong>Hello</strong>;
}
export default function App() {
  // const onClick = () => {
  //   console.log('click');
  // };
  // const style = {
  //   fontSize: '50px',
  //   color: 'red',
  // };
  // function Header() {
  //   return <header>Header</header>;
  // }
  // function Content() {
  //   return <main>Content</main>;
  // }
  // function Footer() {
  //   return <footer>Footer</footer>;
  // }
  return (
    <>
      {/* <Child
        message="Hello World!"
        num={42}
        strArr={['Apple', 'Banana', 'Cherry']}
        obj={{ name: 'Alice', age: 30 }}
        isLoggedIn={true}
        onClick={onClick}
        value={[{ name: 'sucoding' }]}
        style={style}
        Header={<Header />}
        Content={<Content />}
        Footer={<Footer />}
      /> */}
      <ProfileCard
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        instaId="@sallytheramos"
        onClick={(name: string) => alert(name)}
      />
      <ProfileCard
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Anna"
        instaId="@anna"
        onClick={(name: string) => alert(name)}
      />
      <Button type="button">
        <Text />
      </Button>
    </>
  );
}
