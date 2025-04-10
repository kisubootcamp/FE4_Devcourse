function isAnagrams(str1, str2) {
  let sArr1 = [];
  let sArr2 = [];
  let s1 = 0;
  let s2 = 0;
  for (let i = 0; i < str1.length; i++) {
    a = str1[i];
    b = str2[i];
    sArr1.push(a);
    sArr2.push(b);
  }
  sArr1.sort();
  sArr2.sort();

  if (sArr1.toString() === sArr2.toString()) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false
