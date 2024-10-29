export const getQuotes = (set_quotes) => {
  fetch ('https://dummyjson.com/quotes')
  .then(res => res.json())
  .then(json => set_quotes(json.quotes))
}


export const getSingleQuote = (quote_id, set_quotes) => {
  fetch (`https://dummyjson.com/quotes/${quote_id}`)
  .then(res => res.json())
  .then(json => set_quotes(json))
}
