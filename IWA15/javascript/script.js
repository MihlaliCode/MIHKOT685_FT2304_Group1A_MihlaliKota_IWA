// scripts.js

const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const result = [];

const extractBiggest = () => {
  const lastItems = data.lists.map(([_, arr]) => arr[arr.length - 1]);
  const maxIndex = lastItems.reduce(
    (maxIndex, item, currentIndex, arr) =>
      item > arr[maxIndex] ? currentIndex : maxIndex,
    0
  );
  const maxItem = lastItems.splice(maxIndex, 1)[0];
  result.push(maxItem);
};

// Only edit above

extractBiggest();
extractBiggest();
extractBiggest();
extractBiggest();
extractBiggest();

extractBiggest();
extractBiggest();
extractBiggest();
extractBiggest();
extractBiggest();

extractBiggest();
extractBiggest();
extractBiggest();
extractBiggest();
extractBiggest();

console.log(result);
