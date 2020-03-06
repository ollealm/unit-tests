export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject
  if (type === 'string') {
    return stringArrayOrObject === '' // returns true if sring is ''
  } else if (type === 'object') {
    return !Object.keys(stringArrayOrObject).length // ! turns the 0 to true and all other lenghts to false
  }
  return false
}