let reverseString = "Hello World!";
string = "";
for (let i = reverseString.length - 1; i >= 0; i--) {
  a = reverseString[i];
  string += a;
}

console.log("뒤집힌 문자열:", string);
