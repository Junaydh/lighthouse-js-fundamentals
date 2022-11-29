function howManyHundreds(num) {
  let remainder = num % 100;
  num = num - remainder;
  return num / 100;
}
