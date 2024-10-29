export const getUsers = (set_users) => {
  fetch ('https://dummyjson.com/users')
  .then(res => res.json())
  .then(json => set_users(json.users))
}

export const getSingleUser = (user_id, set_users) => {
  fetch (`https://dummyjson.com/users/${user_id}`)
  .then(res => res.json())
  .then(json => set_users(json))
}


