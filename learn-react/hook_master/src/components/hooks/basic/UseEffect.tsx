// UseEffect 훅
// 컴포넌트는 JSX를 반환해서 화면에 보이게 끔 하는게 목표인데, 이 작업을 위해 수행되어야 하는 다른 여러 작업들 - 사이드 이펙트
// useEffect 훅은 컴포넌트가 렌더링된 후 특정 작업(사이드 이펙트)을 수행할 수 있도록 해줍니다.(생성, 삭제, 업데이트)
// 예를 들어, API 호출, DOM 조작, 타이머 설정 등을 수행할 수 있습니다.
// 실무에서는 거의 API 호출이 90%고, DOM조작이 대부분이다.

import { useEffect } from "react";

// useEffect 훅은 두 번째 인자로 의존성 배열을 받을 수 있습니다. (옵셔널) 하지만 의존성 배열을 안적으면 의미가 없어서 웬만하면 적어라.
// 의존성 배열에 있는 값이 변경될 때마다 useEffect 훅이 실행됩니다.
// 의존성 배열이 비어있으면 컴포넌트가 처음 렌더링될 때만 useEffect 훅이 실행됩니다.
// useEffect 훅은 컴포넌트가 언마운트될 때 정리 작업을 수행할 수 있는 함수를 반환할 수 있습니다.
// useEffect 훅은 비동기 작업을 수행할 수 없습니다. 즉, async를 붙일 수 없다.
// useEffect 훅은 비동기 작업을 수행할 수 없으므로, 비동기 작업을 수행하려면 useEffect 훅 밖에서 async 함수를 정의하고 호출해야 합니다.
// useEffect 훅은 컴포넌트가 렌더링될 때마다 실행됩니다.
// useEffect 훅은 컴포넌트가 렌더링될 때마다 실행되므로, 렌더링 성능에 영향을 줄 수 있습니다.
export default function UseEffect() {
  // const fetchData = async () => {
  //   const response = await fetch("");
  //   const data = await response.json();
  //   console.log(data)
  // }
  // useEffect(async () => { // 불가
  useEffect(() => {
    // ....

    // 비동기 사용법 1
    // fetch("")
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((error) => console.error("Error fetcing data: ", error));

    // // 비동기 사용법 2
    // fetchData();
    return () => {
      // ....
    }; // clean up 함수
  }, []);
  return (
    <>
      <h1>UseEffect Component</h1>
    </>
  );
}
