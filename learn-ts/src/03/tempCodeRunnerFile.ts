const getAge = (value: string | number):number|undefined => {
  if(typeof value === "number") return value;
  else if(typeof value === "string") return Number(value);
}

console.log(getAge("25"));  // 25
console.log(getAge(30));    // 30
console.log(getAge("abc")); // NaN