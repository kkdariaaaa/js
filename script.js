// Отримуємо всі кнопки та екран
let buttons = document.querySelectorAll('button');
let display = document.getElementById('display');

// Додаємо обробник подій для кожної кнопки
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    // Отримуємо значення кнопки
    let value = e.target.innerText;

    // Обробка різних типів кнопок
    if (value === 'C') {
      // Очищуємо екран
      display.value = '';
    } else if (value === '=') {
      try {
        // Обчислюємо вираз
        display.value = eval(display.value);
      } catch {
        // Виводимо помилку, якщо вираз некоректний
        display.value = 'Error';
      }
    } else {
      // Додаємо значення кнопки до виразу
      display.value += value;
    }
  });
});

