var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  
function addElementToBeginningOfArray(array, string) {
 return [string,...array]
}
function destructivelyAddElementToBeginningOfArray(array, string) {
  array.unshift(string)
  return array
}
function addElementToEndOfArray(arrayTwo, stringTwo) {
  return [arrayTwo,...stringTwo]
}
function destructivelyAddElementToEndOfArray(arrayTwo, stringTwo)
  array.push(stringTwo)
  return arrayTwo
// function destructivelyAddElementToEndOfArray() {
//   var destructiveArray = [1]
//   destructiveArray.push("foo")
//   return destructiveArray
// }
// function accessElementInArray(array, index) {
//   return array[index]
// function destructivelyRemoveElementFromBeginningOfArray() {
//   var moreNumbers = [1, 2, 3]
//   return moreNumbers.shift()
// }
// function removeElementFromBeginningOfArray() {
  
// }