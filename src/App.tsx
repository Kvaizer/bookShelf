import React, {useMemo, useState} from 'react';
import './App.css';
import BookShelf from './components/BookShelf/BookShelf';
import {v1} from 'uuid';
import Button from './components/Button/Button';

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
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson',
            title: 'You don\'t know JS',
            releaseDate: 2016,
        },
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson',
            title: 'You don\'t know JS',
            releaseDate: 2016,
        },
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson',
            title: 'You don\'t know JS',
            releaseDate: 2016,
        },
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson',
            title: 'You don\'t know JS',
            releaseDate: 2016,
        },
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson',
            title: 'You don\'t know JS',
            releaseDate: 2016,
        },
        {
            id: v1(),
            pictureOfBook: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppbzyMtyD-iuQPrGEP5EaLn1MrE6dz4jObg&usqp=CAU',
            author: 'Nick Morgan',
            title: 'JS for kids',
            releaseDate: 2014,
        },
        {
            id: v1(),
            pictureOfBook: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppbzyMtyD-iuQPrGEP5EaLn1MrE6dz4jObg&usqp=CAU',
            author: 'Nick Morgan',
            title: 'JS for kids',
            releaseDate: 2014,
        },
        {
            id: v1(),
            pictureOfBook: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppbzyMtyD-iuQPrGEP5EaLn1MrE6dz4jObg&usqp=CAU',
            author: 'Nick Morgan',
            title: 'JS for kids',
            releaseDate: 2014,
        },
        {
            id: v1(),
            pictureOfBook: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppbzyMtyD-iuQPrGEP5EaLn1MrE6dz4jObg&usqp=CAU',
            author: 'Nick Morgan',
            title: 'JS for kids',
            releaseDate: 2014,
        },
    ]

    const [books, setBooks] = useState<Array<BookType>>(initialState)
    const [shelfs, setShelfs] = useState<Array<BookType>[]>([])
    const [addMode, setAddMode] = useState<boolean>(false)

    const addBook = (book: BookType) => {
        debugger
        if (book.pictureOfBook === '') book.pictureOfBook = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGw-65vEUR3k8s60dEUFY_lHgAKxXMd-3uA&usqp=CAU'
        setBooks([book, ...books])
    }

    const changeBook = (book: BookType, bookId: string) => {
        setBooks(books.map(item => item.id === bookId ? book : item))
    }

    const removeBook = (bookId: string) => {
        setBooks(books.filter(item => item.id !== bookId))
    }


    useMemo(() => {
        let arrArr: Array<Array<BookType>> = [];
        let arr: Array<BookType> = [];
         for (let i = 0; i < books.length; i++) {
          arr.push(books[i])
             if(arr.length === 5 || i === books.length - 1) {
                 arrArr.push(arr)
                 arr = [];
             }
        }
        setShelfs(arrArr)
    }, [books])

    const stackS = shelfs.map((shelf, index )=> {
        return <div>
            <BookShelf key={v1()} shelfIndex={index} books={shelf} addBook={addBook} changeBook={changeBook} removeBook={removeBook}/>
        </div>
    })

    return (
        <div>
            <div>{stackS}</div>

        </div>
    );
}

export default App;
