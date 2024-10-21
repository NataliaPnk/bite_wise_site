import React, { useContext } from 'react'
import s from '../PostsContainer/index.module.css'
import { Context } from '../../context'
import PostCard from '../PostCard'

export default function PostsContainer() {

  const { posts } = useContext(Context)

  return (
    <div className={s.postsContainer}>
      {
        posts.map((el) => <PostCard key={el.id} {...el} /> )
      }
    </div>
  )
}
