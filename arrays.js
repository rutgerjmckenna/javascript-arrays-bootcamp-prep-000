var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  
function addElementToBeginningOfArray(array, string) {
 return [string,...array]
}
function destructivelyAddElementToBeginningOfArray(array, string) {
  array.unshift(string)
  return array
}
function addElementToEndOfArray(array, string) {
  return [array,...string]
}
function destructivelyAddElementToEndOfArray(array, string) {
  array.push(string)
  return array
}
function accessElementInArray (array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray (array, index) {
  
}
//   var moreNumbers = [1, 2, 3]
//   return moreNumbers.shift()
// }
// function removeElementFromBeginningOfArray() {
  
// }