import React, { useEffect, useState } from 'react'
import { getSingleQuote } from '../../requests/quotes_req'
import { useParams } from 'react-router-dom'
import s from '../SingleQuotePage/index.module.css'
import { FaRegHandPeace } from "react-icons/fa";

export default function SingleQuotePage() {

  const [ singleQuote, setSingleQuotes ] = useState({})

  const { quote_id} = useParams()

  useEffect(() => {
    getSingleQuote(quote_id, setSingleQuotes)
  }, [])


  const {  id, quote, author } = singleQuote
  
  return (
    <div className={s.quoteWrapper}>
    <div>
      <p>{ quote }</p>
      <span>{ author } <FaRegHandPeace /> </span>
    </div>
    </div>
  )
}
