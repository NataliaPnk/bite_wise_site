export const getPosts = (set_posts) => {
  fetch ('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(json => set_posts(json.posts))
}
