import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'
function BookList() {
    const {books, removeBooks, booksRead, removeBooksRead} = useContext(BookContext)
    return (
        <div>
        <div className="book-list">
            <h2 className="Book accent">Books you want to read...</h2>
            {books.length > 0 ?  books.map(book => {
                return (
                    <div key={book.id} className="Book" >
                        <h3 onClick={() => removeBooks(book.id)} >{book.title.toUpperCase()}</h3>
                        <p>{book.author}</p>
                    </div>
                )
            }) :(
                <div className="Book" >
                        <p>No books to read ...</p>
                    </div>
            )}
        </div>
        <div className="book-list">
            <h2 className="Book accent">Books you have read...</h2>
            {booksRead.length > 0 ?  booksRead.map(book => {
                return (
                    <div  key={book.id} className="Book" >
                        <h3 onClick={() => removeBooksRead(book.id)} >{book.title.toUpperCase()}</h3>
                        <p>{book.author}</p>
                    </div>
                )
            }) :(
                <div className="Book" >
                        <p>You Haven't Read any books yet...</p>
                    </div>
            )}
        </div>
        </div>
    )
}

export default BookList
