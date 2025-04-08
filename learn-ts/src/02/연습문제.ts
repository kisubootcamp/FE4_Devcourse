{
  // 1.
  let str: string = "Hello";
  console.log(str);

  // 2.
  let num: number = 42;
  console.log(num);

  // 3.
  let bool: boolean = true;
  console.log(bool);

  // 4.
  let numArr: number[] = [10, 20, 30];
  console.log(numArr);

  // 5.
  let strArr: string[] = ["철수", "영희"];
  console.log(strArr);

  // 6.
  let tuple: [string, number] = ["영희", 30];
  console.log(tuple);

  // 7.
  let nothing: null = null;
  console.log(nothing);

  let unde: undefined = undefined;
  console.log(unde);

  let obj: {
    name: string;
    age: number;
  } = {
    name: "보민",
    age: 30,
  };
  console.log(obj.name);
  console.log(obj.age);
}
