function removeChar(str1, str2) {
  let a = "";
  let result = "";
  let char = 0;
  for (let i = 0; i <= str1.length - 1; i++) {
    a = str1[i];
    if (a !== str2) {
      result += a;
    }
  }
  console.log(result);
}

removeChar("hello world", "o");
