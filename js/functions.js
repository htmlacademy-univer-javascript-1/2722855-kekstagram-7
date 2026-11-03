// 1. Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// 2. Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  // Приводим к нижнему регистру и убираем все пробелы (для усложнённого варианта)
  const cleanString = string.toLowerCase().replaceAll(' ', '');

  // Переворачиваем строку
  const reversedString = cleanString.split('').reverse().join('');

  return cleanString === reversedString;
}

// 3. Дополнительное задание: извлечение цифр
function extractNumber(input) {
  // На всякий случай приводим к строке
  const string = String(input);

  // Оставляем только цифры (заменяем всё, что не цифра, на пустую строку)
  const digits = string.replace(/\D/g, '');

  // Если цифр не осталось, возвращаем NaN
  if (digits === '') {
    return NaN;
  }

  // Превращаем в целое число (parseInt сам отбросит лишние нули)
  return parseInt(digits, 10);
}
