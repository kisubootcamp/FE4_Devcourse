import Button from "./components/Button";

export default function App2() {
  return (
    <>
      <Button>
        <p>안녕</p>
        <p>은서</p>
      </Button>
    </>
  );
}

//컨텐츠 사이에 존재하면 독립적으로 존재하지 않고 합쳐진다.
//무조건 children으로 전달이 됨
