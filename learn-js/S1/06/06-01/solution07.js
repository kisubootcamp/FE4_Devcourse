function countCharacter() {
  let str1 = "banana";
  let str2 = "a";
  let a = "";
  let char = 0;
  for (let i = 0; i <= str1.length - 1; i++) {
    a = str1[i];
    if (a === str2) {
      char = ++char;
    }
  }
  console.log(char);
}

countCharacter();
