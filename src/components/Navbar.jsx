import {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import BookForm from './BookForm'

function Navbar() {
    const {books, booksRead} = useContext(BookContext)
    return (
        <nav>
            <h1 className="header-text" >Readers List</h1>
            <p className="header-sub" >{books.length} books remaining to read and {booksRead.length} books read</p>
            <BookForm />
                {/* <ul className="NavList" >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul> */}
            </nav>
    )
}

export default Navbar
