// Создаем массивы опций для выбора даты, месяца и года
const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}

const months = [
  { value: 0, name: 'Січень' },
  { value: 1, name: 'Лютий' },
  { value: 2, name: 'Березень' },
  { value: 3, name: 'Квітень' },
  { value: 4, name: 'Травень' },
  { value: 5, name: 'Червень' },
  { value: 6, name: 'Липень' },
  { value: 7, name: 'Серпень' },
  { value: 8, name: 'Вересень' },
  { value: 9, name: 'Жовтень' },
  { value: 10, name: 'Листопад' },
  { value: 11, name: 'Грудень' }
];

const years = [];
for (let i = 1900; i <= new Date().getFullYear(); i++) {
  years.push(i);
}

// Создаем элементы select для выбора даты, месяца и года
const daySelect = document.createElement('select');
days.forEach(day => {
  const option = document.createElement('option');
  option.value = day;
  option.text = day;
  daySelect.appendChild(option);
});

const monthSelect = document.createElement('select');
months.forEach(month => {
  const option = document.createElement('option');
  option.value = month.value;
  option.text = month.name;
  monthSelect.appendChild(option);
});

const yearSelect = document.createElement('select');
years.forEach(year => {
  const option = document.createElement('option');
  option.value = year;
  option.text = year;
  yearSelect.appendChild(option);
});

// Получаем текущую дату
const currentDate = new Date();

// Устанавливаем значения выбранных элементов
daySelect.value = currentDate.getDate();
monthSelect.value = currentDate.getMonth();
yearSelect.value = currentDate.getFullYear();

// Добавляем элементы на страницу
document.querySelector('.date-picker').appendChild(daySelect);
document.querySelector('.date-picker').appendChild(monthSelect);
document.querySelector('.date-picker').appendChild(yearSelect);
