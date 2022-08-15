import React, {useMemo, useState} from 'react';
import './App.css';
import BookShelf from './components/BookShelf/BookShelf';
import {v1} from 'uuid';
import Button from './components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from './state/store';
import {addModeChangeAC} from './state/booksReducer';

export type BookType = {
    id: string
    pictureOfBook: string
    author: string
    title: string
    releaseDate: number
    editMode: boolean
}


function App() {
    const books = useSelector<AppRootState, BookType[]>(store => store.books.books)
    const dispatch = useDispatch()
    const [shelves, setShelves] = useState<Array<BookType>[]>([])


    useMemo(() => {
        let arrArr: Array<Array<BookType>> = [];
        let arr: Array<BookType> = [];
        for (let i = 0; i < books.length; i++) {
            arr.push(books[i])
            if (arr.length === 5 || i === books.length - 1) {
                arrArr.push(arr)
                arr = [];
            }
        }
        setShelves(arrArr)
    }, [books])

    const addModeOn = () => {
        dispatch(addModeChangeAC(true))
    }

    const stackS = shelves.map((shelf, index) => {
        return <div>
            <BookShelf
                key={v1()}
                shelfIndex={index}
                books={shelf}/>
        </div>
    })

    return (
        <div>
            <div>{stackS}</div>
            <div style={{position: 'fixed', top: '40px', left: '30px'}}>
                <Button title={'Add Book'} callBack={addModeOn}/>
            </div>
        </div>
    );
}

export default App;
