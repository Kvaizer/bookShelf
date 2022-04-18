import React, {useState} from 'react';
import './App.css';
import BookShelf from './components/BookShelf/BookShelf';
import {v1} from 'uuid';

export type BookType = {
    id: string
    pictureOfBook: string
    author: string
    title: string
    releaseDate: number
}


function App() {
    const initialState = [
        {
            id: v1(),
            pictureOfBook: 'https://slutsker.pro/wp-content/uploads/2021/04/head_first_design_patterns.jpg',
            author: 'Eric Freeman',
            title: 'Head First',
            releaseDate: 2014,
        },
        {
            id: v1(),
            pictureOfBook: 'https://www.mann-ivanov-ferber.ru/assets/images/books-new/javascript-dlya-detej/java-big.png',
            author: 'Nick Morgan',
            title: 'JS for kids',
            releaseDate: 2013,
        },
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson',
            title: 'You don\'t know JS',
            releaseDate: 2016,
        }
    ]

    const [books, setBooks] = useState<Array<BookType>>(initialState)

    const addBook = (book: BookType) => {
        debugger
        if(book.pictureOfBook === '') book.pictureOfBook = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGw-65vEUR3k8s60dEUFY_lHgAKxXMd-3uA&usqp=CAU'
        setBooks([book, ...books])
    }

    const changeBook = (book: BookType, bookId: string) => {
        setBooks(books.map(item => item.id === bookId ? book : item))
    }

    const removeBook = (bookId: string) => {
        setBooks(books.filter(item => item.id !== bookId))
    }

    return (
        <div className="App">
            <BookShelf books={books} addBook={addBook} changeBook={changeBook} removeBook={removeBook}/>
        </div>
    );
}

export default App;
