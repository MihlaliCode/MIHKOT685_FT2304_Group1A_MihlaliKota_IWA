const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";

const divider = "----------------------------------";

// Only change below this line

const owed = parseFloat(Math.abs(leoBalance).toFixed(2)) + parseFloat(Math.abs(sarahBalance).toFixed(2));
const leo = `${leoName} ${leoSurname} (Owed: R ${Math.abs(leoBalance).toFixed(2)})`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${Math.abs(sarahBalance).toFixed(2)})`;
const total = "Total amount owed: R ";
const result = `\n${leo}\n${sarah}\n${divider}\n${total}${owed}\n${divider}`;

console.log(result);