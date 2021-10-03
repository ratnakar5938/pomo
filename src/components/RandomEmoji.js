const emojis = ['🍅', '🚀', '🍕', '🍪', '🤠', '👾', '🦸🏽‍♀️', '🧕🏽', '🍤', '🤓', '⛺️', '🍀', '😍', '👍', '🎃']
const random = Math.floor(Math.random() * emojis.length)

export default () => {
  return emojis[random]
}
