{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `hello, ${name}`;

  type Point = [number, number];
  let point: Point = [10, 20]; // x좌표, y좌표
}
