{
  const doubleValue = (a: string | number): number => {
    if (typeof a === "string") {
      return a.length * 2;
    } else if (typeof a === "number") {
      return a * 2;
    } else {
      return a;
    }
  };

  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}
