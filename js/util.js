export function randInt(min, max){ // Результат: целое число из диапазона "от...до" или уведомление об ошибке

  //Проверка удовлетворению условий
  if (min < 0 || max < 0 || min > max){
    return ('Некорректно заданный диапозон');
  }

  //Получение и округления результата
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function checkLength(str, maxLength){ // Результат: true, если строка проходит по длине, и false — если не проходит
  return str.length <= maxLength;
}
