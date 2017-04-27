var a = prompt('podaj liczbę');
var b = prompt('podaj liczbę');
var value = (a * a) + (2 * a * b) - (b * b);
alert(value)


if (value > 0 ) {
  console.log(‘Liczba jest dodatnia’);
} else if (value < 0 ) {
  console.log(‘Liczba jest ujemna’);
} else {
  console.log(‘Liczba równa zero’);
}



