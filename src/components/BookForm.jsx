import React, {useContext, useState} from 'react'
import{ BookContext} from '../contexts/BookContext'
function BookForm() {
    const {addBooks} = useContext(BookContext)
    const [inputTitle, setInputTitle] = useState('')
    const [inputAuthor, setInputAuthor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputTitle !== '' && inputAuthor !== '' ) {
          addBooks(inputTitle,inputAuthor)
          setInputTitle('')  
          setInputAuthor('')  
        }
        
    }
    return (
        <form onSubmit={handleSubmit} >
            <input  onChange={(e) => setInputTitle(e.target.value)} type="input" placeholder="Enter Title..." />
            <input onChange={(e) => setInputAuthor(e.target.value)} type="input" placeholder="Enter Author..." />
            <button type="submit" >Add book</button>
        </form>
    )
}

export default BookForm
