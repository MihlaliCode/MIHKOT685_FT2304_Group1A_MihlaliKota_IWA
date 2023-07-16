const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const [firstLabel, firstArr] = data.lists[0];
const [secondLabel, secondArr] = data.lists[1];
const [thirdLabel, thirdArr] = data.lists[2];

const result = [];

const extractBiggest = () => {
  const firstLast = firstArr[firstArr.length - 1];
  const secondLast = secondArr[secondArr.length - 1];
  const thirdLast = thirdArr[thirdArr.length - 1];

  if (firstLast >= secondLast && firstLast >= thirdLast) {
    result.push(firstLast);
    return firstArr.pop();
  }

  if (secondLast >= firstLast && secondLast >= thirdLast) {
    result.push(secondLast);
    return secondArr.pop();
  }

  if (thirdLast >= firstLast && thirdLast >= secondLast) {
    result.push(thirdLast);
    return thirdArr.pop();
  }
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
