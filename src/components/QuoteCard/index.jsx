import React from 'react'
import s from '../QuoteCard/index.module.css'
import { Link } from 'react-router-dom'

export default function QuoteCard({ id, quote, author }) {

  return (
    <Link to={`/quotes/${id}`} className='link'>
    <div className={s.quoteCard}>
      <p>{ quote }</p>
      <span>{ author }</span>
    </div>
    </Link>
  )
}
