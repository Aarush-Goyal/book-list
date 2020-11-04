import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { id: uuid(), title: "sapiens", author: "Charlie Chaplin" },
    { id: uuid(), title: "Shoe Dog Phil Knight", author: "Daya and Abhijeet" },
    { id: uuid(), title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    {
      id: uuid(),
      title: "Good Economics for bad times",
      author: "Abhijit Banerjee",
    },
    {
      id: uuid(),
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
    },
    { id: uuid(), title: "The EveryThing Store", author: "Brad Stone" },
  ]);

  const [booksRead, setBooksRead] = useState([]);
  const addBooks = (title, author) => {
    setBooks([...books, { id: uuid(), title, author }]);
  };
  const removeBooks = (id) => {
    setBooks([...books.filter((book) => book.id !== id)]);
    setBooksRead([...booksRead, ...books.filter((book) => book.id === id)]);
  };
  const removeBooksRead = (id) => {
    setBooksRead([...booksRead.filter((book) => book.id !== id)]);
    setBooks([...books, ...booksRead.filter((book) => book.id === id)]);
  };
  return (
    <BookContext.Provider
      value={{ books, addBooks, removeBooks, booksRead, removeBooksRead }}
    >
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
