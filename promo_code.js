let storage = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; //62

function* count_generator(key) {
  key = key || Date.now();
  let some_integers = [298347, 9827342];

  while(true) {
    let counter1 = some_integers[0]*key + (key >> 9);
    let counter2 = some_integers[1]*key + (key >> 9);
    some_integers = some_integers.map(i => i + 1);
    yield Math.abs((counter1 << 9) + (counter2 & 0xFFFF));
  }
}

let counter_generator = count_generator();

let promo_generator = () => {
  let promo_code = [];
  for (let i = 0; i < 11; i++) {
    promo_code[i] = storage[counter_generator.next().value % (i < 7 ? storage.length : 10)];
  }
  promo_code[2] = '-';
  return promo_code.join('');
}
