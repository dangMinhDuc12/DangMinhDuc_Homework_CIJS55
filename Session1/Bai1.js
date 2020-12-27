function adjacentElementsProduct(inputArray = []) {
  let max = inputArray[0] * inputArray[1];
  for(let i = 0; i < inputArray.length; i++) {
    let count = inputArray[i] * inputArray[i + 1];
    if(count > max) {
      max = count;
    }
  
  }
  return max;
}

console.log(adjacentElementsProduct([5,6,-2,-5,7,3]));