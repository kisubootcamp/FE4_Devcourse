function factorial() {
  let a = 5;
  let fac = [];
  for (let i = 0; i < 5; i++) {
    fac.push(a);
    console.log(a);
    a = --a;
  }

  let fact = 1;
  fac.forEach((num) => {
    fact *= num;
  });
  console.log(fact);
}

factorial();
