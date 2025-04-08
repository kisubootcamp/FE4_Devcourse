{
  // 1
  const q1: string = "Hello";
  console.log(q1);

  // 2
  const q2: number = 42;
  console.log(q2);

  // 3
  const q3: boolean = true;
  console.log(q3);

  // 4
  const q4: number[] = [1, 2, 3];
  console.log(q4);

  // 5
  const q5: string[] = ["a", "b", "c"];
  console.log(q5);

  // 6
  const q6: (number | string)[] = [1, "a", "r", 5];
  console.log(q6);

  const q6_: [number, string] = [1, "a"];
  console.log(q6_);

  // 7
  const q7: null = null;
  console.log(q7);

  // 8
  const q8: undefined = undefined;
  console.log(q8);

  // 9
  const q9: object = {
    name: "yubin",
    age: 26,
  };
  console.log(q9);

  const q9_: {
    name: string;
    age: number;
  } = {
    name: "yubin",
    age: 26,
  };
  console.log(q9_);
}
