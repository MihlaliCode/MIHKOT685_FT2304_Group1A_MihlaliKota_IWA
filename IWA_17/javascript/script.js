// scripts.js

const MONTHS = [
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

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

const createArray = (length) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(i);
  }

  return result;
};

const createData = () => {
  const current = new Date();
  current.setDate(1); //Sets the day of the month for a specified date according to local time

  const startDay = current.getDay(); //Returns the day of the week (0-6) for a specified date according to local time
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(5); //Gives numerical value to the length of weeks
  const days = createArray(7); //Gives numerical value to the length of weeks
  const result = [];

  for (const weekIndex of weeks) {
    result.push({
      week: weekIndex + 1,
      days: [],
    });

    for (const dayIndex of days) {
      const day = dayIndex - startDay + weekIndex * 7 + 1;
      const isValid = day > 0 && day <= daysInMonth;

      result[weekIndex].days.push({
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : "",
      });
    }
  }

  return result;
};

const addCell = (existing, classString, value) => {
  const result = /* html */ `
        ${existing}
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;

  return result;
};

const createHtml = (data) => {
  let result = "";

  for (const { week, day } of data) {
    let inner = "";
    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);

    for (const { dayOfWeek, value } of data) {
      const isToday = new Date().getDate() === value;
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isAlternate = week % 2 === 0;

      let classString = "table__cell";

      if (isToday) classString = `${} table__cell_`;
      //   if (isWeekend) classString = `${} table__cell_`;
      //   if (isAlternate) classString = `${} table__cell_`;
      inner = addCell();
    }

    result = `
            ${result}
            <tr>${inner}</tr>
        `;
  }

  return result;
};

// Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);
