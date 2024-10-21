import React, { useContext } from 'react'
import s from '../QuotesContainer/index.module.css'
import { Context } from '../../context'
import QuoteCard from '../QuoteCard'

export default function QuotesContainer() {

  const { quotes } = useContext(Context)

  return (
    <div className={s.quotesContainer}>
      {
        quotes.map((el) => <QuoteCard key={el.id} {...el} />)
      }
    </div>
  )
}
