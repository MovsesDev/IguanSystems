import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { addQuote } from './redux/formReducer'
const GGG = (props) => {

  const [quote, setQuote] = useState('')
  const [quotes, setQuotes] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    let newQuote = {
      id: new Date().getTime(),
      text: quote,
      comoleted: false
    }

    setQuotes([...quotes].concat(newQuote))
    props.addQuote(newQuote)
    setQuote('')
  }

  const deleteQuote = (id) => {
    const updatedQuotes = [...quotes].filter(quote => quote.id !== id)
    props.addQuote(updatedQuotes)
    setQuotes(updatedQuotes)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={e => setQuote(e.target.value)} value={quote}/>
        <button type='submit'>Add Quote</button>
      </form>

      {props.quotes.map(quote => 
      <div key={quote.id}>
        <div > {quote.text} </div> 
        <button onClick={() => deleteQuote(quote.id)}>Delete</button>
      </div>)}

    </div>

  )
}

let mapStateToProps = state => ({
  quotes: state.form.quotes
})

export default connect(mapStateToProps, { addQuote })(GGG)