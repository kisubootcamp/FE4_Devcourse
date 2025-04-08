let a = 0;
for (let i = 0; i < 16; i++) {
  if (a % 2 === 0) {
    console.log(a, "짝수");
  } else if (a % 2 === 1) {
    console.log(a, "홀수");
  }
  a = ++a;
}
