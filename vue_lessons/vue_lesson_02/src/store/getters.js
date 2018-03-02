export const count = state => state.count

export const evenOrOdd = state => {
  return state.count % 2 === 0 ? 'even' : 'odd'
}

const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : (end - limit)
  return state.history.slice(begin, end).toString().replace(/,/g, ', ')
}
