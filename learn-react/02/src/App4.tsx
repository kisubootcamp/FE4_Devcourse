import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default function App(){
  return (
    <div>
      <h1 className="title">CSS 글로벌</h1>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}