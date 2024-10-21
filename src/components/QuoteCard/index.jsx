import React from 'react'
import s from '../QuoteCard/index.module.css'

export default function QuoteCard({ id, quote, author}) {

  return (
    <div className={s.quoteCard}>
      <p>{ quote }</p>
      <span>{ author }</span>
    </div>
  )
}
