export const filterNumbers = (array, largerThan) => {
  console.log(largerThan)
  return array.filter(number => number < largerThan)
}