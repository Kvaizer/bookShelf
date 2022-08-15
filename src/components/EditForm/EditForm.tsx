import React, {useState} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {BookType} from '../../App';
import s from './EditForm.module.css'


type EditFormPropsType = {
    info: BookType
    saveChange?: (book: BookType) => void
    closeForm: () => void
    addBook?: (book: BookType) => void
}

type ErrorType = {
    title: string
    author: string
    date: string
}

export const EditForm: React.FC<EditFormPropsType> = React.memo(({info, saveChange, closeForm, addBook}) => {
    debugger

    const [book, setBook] = useState<BookType>(info)

    const [error, setError] = useState<ErrorType>({
        title: '',
        author: '',
        date: ''
    })


    const onClickSaveBookChanges = () => {
        let finalError: ErrorType = {
            title: '',
            author: '',
            date: ''
        }

        if (book.title.trim() === '') {
            debugger
            finalError['title'] = 'Unacceptable title'
        }

        if (book.author.trim() === '') {
            finalError['author'] = 'Unacceptable author'
        }

        if (!Number(book.releaseDate)) {
            finalError['date'] = 'Unacceptable date'
        }

        if (Object.values(finalError).filter(item => item !== '').length === 0) {
            if (saveChange) saveChange({...book})
            if (addBook) addBook({...book})
            closeForm()
        } else setError(finalError)
    }
    console.log(book)

    const onChangeBookTitle = (newTitle: string) => {
        setBook({...book, title: newTitle.trim()})
    }

    const onChangeAuthor = (newAuthor: string) => {
        setBook({...book, author: newAuthor.trim()})
    }

    const onChangeReleaseDate = (newDate: number) => {
        setBook({...book, releaseDate: newDate})
    }

    const errors = Object.values(error).map(item => <div className={s.error}>{item}</div>)
    console.log(error)
    return (
        <div className={s.window}>
                <div className={s.formWrapper}>
                    <div className={s.inputs}>
                        <label>BookTitle</label>
                        <Input title={'BookTitle'} onChange={onChangeBookTitle} value={info.title}/>
                        <label>Author</label>
                        <Input title={'Author'} onChange={onChangeAuthor} value={info.author}/>
                        <label>ReleaseDate</label>
                        <Input title={'ReleaseDate'} onChange={onChangeReleaseDate} value={info.releaseDate}/>
                    </div>
                    <div className={s.buttonsContainer}>
                        <Button title={'Save'} callBack={onClickSaveBookChanges}/>
                        <Button title={'Cancel'} callBack={closeForm}/>
                    </div>
                    {error ? <div className={s.errorBox}>{errors}</div> : ''}
            </div>

        </div>
    );
});

export default EditForm;