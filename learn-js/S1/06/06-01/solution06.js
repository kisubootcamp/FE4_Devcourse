function reverseString() {
  let reverseString = "hello";
  string = "";
  for (let i = reverseString.length - 1; i >= 0; i--) {
    a = reverseString[i];
    string += a;
  }

  console.log(string);
}

reverseString();
