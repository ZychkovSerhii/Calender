const monthInx = new Date().getMonth();
const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.innerText = month[monthInx];
fullDateEl.innerText = new Date().toDateString();

console.log(lastDay);
console.log(firstDay);

let days = "";

for (let i = 1; i <= firstDay; i++) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else days += `<div>${i}</div>`;
}

daysEl.innerHTML = days;
