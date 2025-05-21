function sum() {
  let args = 0;
  let n = arguments.length;
  for (let i = 0; i < n; i++) args += arguments[i];
  console.log(args);
}

sum(1, 2, 3, 4, 5, 6);
