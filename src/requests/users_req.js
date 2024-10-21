export const getUsers = (set_users) => {
  fetch ('https://dummyjson.com/users')
  .then(res => res.json())
  .then(json => set_users(json.users))
}


