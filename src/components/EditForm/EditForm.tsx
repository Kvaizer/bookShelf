import React, {useEffect, useMemo, useState} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {BookType} from '../../App';
import s from './EditForm.module.css'
import {v1} from 'uuid';
import set = Reflect.set;
import {log} from 'util';

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

export const EditForm: React.FC<EditFormPropsType> = ({info, saveChange, closeForm, addBook}) => {

    const [book, setBook] = useState<BookType>(info)
    // const [title, setTitle] = useState(info.title)
    // const [author, setAuthor] = useState(info.author)
    // const [date, setDate] = useState(info.releaseDate)
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
            if(saveChange) saveChange({...book})
            if(addBook) addBook({...book})
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

    const errors = Object.values(error).map(item => <div>{item}</div>)
    console.log(error)
    return (
        <div className={s.window}>
            <div className={s.form}>
                <div>
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

                {error ? <div key={v1()}>
                    <div>{errors}</div>
                </div> : ''}
            </div>
        </div>
    );
};

export default EditForm;