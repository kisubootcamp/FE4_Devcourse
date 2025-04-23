//재네릭 연습문제
{
  //1.
  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }

  console.log(getFirst([1, 2, 3])); // 1
  console.log(getFirst(["a", 1, 2]));
  console.log(getFirst(["a", "b", "c"]));
}
{
  //2.
  function getLength<T>(arr:T[]): number {
    return arr.length;
  }
  
  console.log(getLength([1, 2, 3])); // 3
  
}