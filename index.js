function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0; i<array.length;i++ ){
    const complement = target - array[i] //difference of the first number to the target value
    for (let j= i+1; j<array.length;j++){ //looks for the answer of the difference in the array 
    if (array[j]=== complement) return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  the function must take the first number of the array and add it up to each
  element in the array. Then compare the sum of the number to the target
  if the sum equals the target then pass true if not then pass false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
