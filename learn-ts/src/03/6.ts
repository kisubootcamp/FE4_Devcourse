{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;

  type Point = [number, number];
  let point: [number, number] = [10, 20];
  let point2: number[] = [10, 20];
  let point3: Point = [10, 20];

  //값 자체로 사용하는 걸 literal 이라고 함
  const num = 10;
}
