import React, {useState} from 'react';
import {BookType} from '../../App';
import Book from '../Book/Book';
import Button from '../Button/Button';
import EditForm from '../EditForm/EditForm';
import {v1} from 'uuid';
import s from './BookShelf.module.css'

type BookShelfPropsType = {
    books: BookType[],
    addBook: (book: BookType) => void
    changeBook: (book: BookType, bookId: string) => void
    removeBook: (bookId: string) => void
}

const BookShelf: React.FC<BookShelfPropsType> = ({books, addBook, changeBook, removeBook}) => {

    const newBook: BookType = {
        id: v1(),
        pictureOfBook: '',
        author: '',
        title: '',
        releaseDate: 0,
    }

    const [addMode, setAddMode] = useState<boolean>(false)

    const saveBookChanges = (book: BookType, bookId: string) => {
        changeBook(book, bookId)
    }

    const addModeOn = () => {
        setAddMode(true)
    }

    const addModeOff = () => {
        setAddMode(false)
    }

    const addBookHandler = (newBook: BookType) => {
        debugger
        addBook(newBook)
    }

    return (
        <div className={s.wrapper}>
            <div>
                {addMode ? <EditForm info={newBook} closeForm={addModeOff} addBook={addBookHandler}/> : null}
                {books.map(book => <Book key={book.id} saveChange={saveBookChanges} book={book} removeBook={removeBook}/>)}
            </div>
            <Button title={'Add Book'} callBack={addModeOn}/>
        </div>

    );
};

export default BookShelf;