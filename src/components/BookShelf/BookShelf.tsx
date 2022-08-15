import React, {useState} from 'react';
import {BookType} from '../../App';
import Book from '../Book/Book';
import Button from '../Button/Button';
import EditForm from '../EditForm/EditForm';
import {v1} from 'uuid';
import s from './BookShelf.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {addBookAC, addModeChangeAC, changeBookAC} from '../../state/booksReducer';
import {AppRootState} from '../../state/store';

type BookShelfPropsType = {
    books: BookType[],
    shelfIndex: number,
}

const BookShelf: React.FC<BookShelfPropsType> = React.memo(({books, shelfIndex}) => {

    const addMode = useSelector<AppRootState, boolean>(store => store.books.addMode)
    const newBook: BookType = {
        id: v1(),
        pictureOfBook: '',
        author: '',
        title: '',
        releaseDate: 0,
        editMode: false,
    }
    const dispatch = useDispatch()

    // const saveBookChanges = (book: BookType, bookId: string) => {
    //     dispatch(changeBookAC(bookId, book))
    // }

    const addModeOff = () => {
        dispatch(addModeChangeAC(false))
    }


    const addBookHandler = (newBook: BookType) => {
        debugger
        dispatch(addBookAC(newBook))
    }

    return (
        <div style={shelfIndex === 0 ? undefined : {marginTop: 10}}>
            <div className={s.shelfWrapper}>
                {addMode ? <EditForm info={newBook} closeForm={addModeOff} addBook={addBookHandler} /> : null}
                {
                    books.map((book, index) => <Book key={book.id} book={book} index={index}/>)
                }
            </div>
        </div>
    );
});

export default BookShelf;