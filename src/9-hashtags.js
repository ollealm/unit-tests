export const hashtags = (text) => {
  return text.match(/\u0023+\w+/g)
}