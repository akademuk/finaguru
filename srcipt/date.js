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

monthSelect.addEventListener('change', () => {
  const selectedMonth = months[monthSelect.value];
  const selectedYear = yearSelect.value;
  
  // Февраль имеет индекс 1 в массиве months
  if (selectedMonth.value === 1 && selectedYear % 4 !== 0) {
    // Если выбран февраль и год не високосный, то убираем дни 30 и 31 из списка
    for (let i = days.length; i > 29; i--) {
      daySelect.removeChild(daySelect.lastChild);
    }
  } else if (daySelect.childElementCount !== days.length) {
    // Если выбран месяц, который не февраль и до этого уже была изменена длина списка дней,
    // то восстанавливаем список дней до его первоначальной длины
    for (let i = daySelect.childElementCount; i < days.length; i++) {
      const option = document.createElement('option');
      option.value = days[i];
      option.text = days[i];
      daySelect.appendChild(option);
    }
  }
});