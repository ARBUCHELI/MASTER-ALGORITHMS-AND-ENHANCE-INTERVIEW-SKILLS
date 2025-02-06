const swap = require('./swap');

const bubbleSort = input => {
  let swapCount = 0
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        console.log(swapCount);
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};

module.exports = bubbleSort;

const result1 = bubbleSort([4, 3, 2, 1]);
console.log(result1);

/*const result2 = bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result2);*/