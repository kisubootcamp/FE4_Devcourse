const price = 50000;

if (price >= 100000) {
  const priceDis = price * 0.8;
  console.log(`${priceDis}원`);
} else if (price >= 50000) {
  const priceDis = price * 0.9;
  console.log(`${priceDis}원`);
} else {
  console.log(`${price}원`);
}
