import Child from './components/Child';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
// import User from './components/User';
import Card from './components/Card';

export default function App() {
  // const myF = (ww: string) => console.log(ww);
  const print = () => console.log('함수 전달');
  const follow = () => alert('팔로우');
  return (
    <>
      <div className='white'>
        {/* <User
          message='안녕하세요'
          count={10}
          isVisible={true}
          tags={['a', 'b', 'c']}
          user={{ id: 1, name: 'ty' }}
          myF={myF}
        /> */}

        <Child
          message='Hello, World!'
          num={42}
          fruit={['Apple', 'Banana', 'Cherry']}
          user={{ name: 'Alice', age: 30 }}
          isLoggedIn={true}
          onClick={print}
          // name=''
          value={['1', 'ㅇ']}
          style={{ fontSize: '50px', color: 'red' }}
          Header={<Header />}
          Content={<Content />}
          Footer={<Footer />}
        />
      </div>

      <Card
        backImage={
          'https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        userImage={
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        userName={'Sally Ramos'}
        userId={'@sallytheramos'}
        follow={follow}
      />
    </>
  );
}
