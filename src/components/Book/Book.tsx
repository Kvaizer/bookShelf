import React, {useState} from 'react';
import {BookType} from '../../App';
import s from './Book.module.css'
import EditForm from '../EditForm/EditForm';
import Button from '../Button/Button';

type BookPropsType = {
    book: BookType
    saveChange: (book: BookType, id: string) => void
    removeBook: (bookId: string) => void
}

const Book: React.FC<BookPropsType> = ({book, saveChange, removeBook}) => {

    const [editMode, setEditMode] = useState<boolean>(false)


    const onClickHandler = () => {
        setEditMode(true)
    }

    const onClickSaveBookChanges = (book: BookType) => {
        saveChange(book, book.id)
    }

    const onClickCloseEditForm = () => {
        setEditMode(false)
    }

    const onClickRemoveBookHandler = () => {
        removeBook(book.id)
    }

    return (
        <div className={s.bookWrapper}>
            <div className={s.pictureOfBook}><img  src={book.pictureOfBook} width={200} height={'auto'}/></div>
            <div className={s.title}>{book.title}</div>
            <div className={s.infoWrapper}>
                <div className={s.author}>{book.author}</div>
                <div className={s.releaseDate}>Дата выпуска: {book.releaseDate}</div>
                <div className={s.editButton}>
                    <Button title={'Edit'} callBack={onClickHandler}/>
                    <Button title={'Delete'} callBack={onClickRemoveBookHandler}/>
                </div>
                {editMode ? <EditForm saveChange={onClickSaveBookChanges} closeForm={onClickCloseEditForm} info={book}/> : ''}
            </div>
        </div>
    );
};

export default Book;