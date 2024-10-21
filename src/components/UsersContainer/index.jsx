import React, { useContext } from 'react'
import s from '../UsersContainer/index.module.css'
import { Context } from '../../context'
import UserCard from '../UserCard'

export default function UsersContainer() {

  const { users } = useContext(Context)

  return (
    <div className={s.usersContainer}>
      {
        users.map((el) => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}
