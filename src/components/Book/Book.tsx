import React, {useState} from 'react';
import {BookType} from '../../App';
import s from './Book.module.css'
import EditForm from '../EditForm/EditForm';
import Button from '../Button/Button';

type BookPropsType = {
    book: BookType
    saveChange: (book: BookType, id: string) => void
    removeBook: (bookId: string) => void
    index: number
}

const Book: React.FC<BookPropsType> = ({book, saveChange, removeBook, index}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [zIndex, setIndex] = useState<number>(index)

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

    const onMouseEnterHandler = () => {
        setIndex((index + 1) * 10)
    }

    const onMouseLeaveHandler = () => {
        setIndex(index)
    }


    return (
        <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} style={{position: 'absolute', top: '150px', left: '400px', marginLeft: index * 100}}>
            <div className={s.bookWrapper}>
                <div className={s.pictureOfBook}><img src={book.pictureOfBook} width={200} height={'auto'}/></div>
                <div className={s.title}>{book.title}</div>
                <div className={s.infoWrapper}>
                    <div className={s.author}>{book.author}</div>
                    <div className={s.releaseDate}>Дата выпуска: {book.releaseDate}</div>
                    <div className={s.editButton}>
                        <Button title={'Edit'} callBack={onClickHandler}/>
                        <Button title={'Delete'} callBack={onClickRemoveBookHandler}/>
                    </div>
                    {editMode ? <EditForm saveChange={onClickSaveBookChanges} closeForm={onClickCloseEditForm}
                                          info={book}/> : ''}
                </div>
            </div>
        </div>

    );
};

export default Book;