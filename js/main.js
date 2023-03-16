//module2-task1

function randInt(min, max){ // Результат: целое число из диапазона "от...до" или уведомление об ошибке

  //Проверка удовлетворению условий
  if (min < 0 || max < 0 || min > max){
    return ('Некорректно заданный диапозон');
  }

  //Получение и округления результата
  else{
    return Math.floor(Math.random * (max - min + 1) + min);
  }
}

randInt (-1, 2);
randInt (0, 9);

function lengthCheck(str, maxLength){ // Результат: true, если строка проходит по длине, и false — если не проходит
  if (str.length > maxLength){
    return true;
  }
  return false;
}

lengthCheck('keks', 2);
lengthCheck('keks', 10);

//module4-task1

const data = [];

const photo = (n) => ({
  id: n,
  url: `photos/${  n  }.jpg`,
  description: `jpg № ${ n }`,
  likes: randInt(15, 200),
  comments: randInt(0, 200),
});

function photoData (n){
  for (let i = 1; i <= n; i++) {
    data[i] = photo(i);
  }
}

photoData(25);
