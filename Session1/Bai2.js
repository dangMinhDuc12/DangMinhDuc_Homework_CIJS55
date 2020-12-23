//Cách 1: Dùng for
function findOddNumber(inputArray = []) {
  let output = [];
  for(let i = 0; i < inputArray.length; i++) {
    if(inputArray[i] % 2 === 0) {
      output.push(inputArray[i]);
    }
  }
  return output;
}
// console.log(findOddNumber([3,6,-2,-5,7,3,8,10,11]));

//Cách 2: Không dùng for
function findOddNumberWithoutLoop(inputArray = []) {
  return inputArray.filter(input => (input % 2) === 0);

}
console.log(findOddNumberWithoutLoop([3,6,-2,-5,7,3,8,10,11]));