import React from 'react';
import {BookType} from '../../App';
import s from './Book.module.css'
import EditForm from '../EditForm/EditForm';
import Button from '../Button/Button';
import {changeBookAC, editModeChangeAC, removeBookAC} from '../../state/booksReducer';
import {useDispatch} from 'react-redux';

type BookPropsType = {
    book: BookType
    index: number
}

const Book: React.FC<BookPropsType> = React.memo(({book, index}) => {
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(editModeChangeAC(book.id, true))
    }

    const onClickSaveBookChanges = (book: BookType) => {
        dispatch(changeBookAC(book.id, book))
    }

    const onClickCloseEditForm = () => {
        dispatch(editModeChangeAC(book.id, false))
    }

    const onClickRemoveBookHandler = () => {
        dispatch(removeBookAC(book.id))
    }

    return (
        <div style={{position: 'absolute', top: '25px', left: '500px', marginLeft: index * 80}}>
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
                </div>
            </div>
            {book.editMode ? <EditForm
                saveChange={onClickSaveBookChanges}
                closeForm={onClickCloseEditForm}
                info={book}/> : ''}
        </div>

    );
});

export default Book;