import {v1} from 'uuid';

export type BookType = {
    id: string
    pictureOfBook: string
    author: string
    title: string
    releaseDate: number
    editMode: boolean
}

export type InitialStateType = {
    books: BookType[]
    addMode: boolean
}

export type ActionsType = AddBookAT | RemoveBookAT | ChangeBookAT | AddModeChangeAT | EditModeChangeAT

const initialState = {
    books: [
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson1',
            title: 'You don\'t know JS',
            releaseDate: 2016,
            editMode: false,
        },
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson2',
            title: 'You don\'t know JS',
            releaseDate: 2016,
            editMode: false,
        },
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson3',
            title: 'You don\'t know JS',
            releaseDate: 2016,
            editMode: false,
        },
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson4',
            title: 'You don\'t know JS',
            releaseDate: 2016,
            editMode: false,
        },
        {
            id: v1(),
            pictureOfBook: 'https://img4.labirint.ru/rc/45c3d89284b2182a95b0d693e9e11829/220x340/books71/704016/cover.jpg?1561541155',
            author: 'Kyle Simpson5',
            title: 'You don\'t know JS',
            releaseDate: 2016,
            editMode: false,
        },
        {
            id: v1(),
            pictureOfBook: 'https://www.mann-ivanov-ferber.ru/assets/images/books-new/javascript-dlya-detej/java-big.png',
            author: 'Nick Morgan6',
            title: 'JS for kids',
            releaseDate: 2014,
            editMode: false,
        },
        {
            id: v1(),
            pictureOfBook: 'https://www.mann-ivanov-ferber.ru/assets/images/books-new/javascript-dlya-detej/java-big.png',
            author: 'Nick Morgan7',
            title: 'JS for kids',
            releaseDate: 2014,
            editMode: false,
        },
        {
            id: v1(),
            pictureOfBook: 'https://www.mann-ivanov-ferber.ru/assets/images/books-new/javascript-dlya-detej/java-big.png',
            author: 'Nick Morgan8',
            title: 'JS for kids',
            releaseDate: 2014,
            editMode: false,
        },
        {
            id: v1(),
            pictureOfBook: 'https://www.mann-ivanov-ferber.ru/assets/images/books-new/javascript-dlya-detej/java-big.png',
            author: 'Nick Morgan9',
            title: 'JS for kids',
            releaseDate: 2014,
            editMode: false,
        },
    ],
    addMode: false,
}

export const booksReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-BOOK': {
            return {
                ...state,
                books: [...state.books, action.book]
            }
        }
        case 'REMOVE-BOOK': {
            return {
                ...state,
                books: state.books.filter(item => item.id !== action.id)
            }
        }
        case 'CHANGE-BOOK': {
            debugger
            return {
                ...state,
                books: state.books.map(item => item.id === action.id ? action.book : item)
            }
        }
        case 'ADD-MODE-CHANGE': {
            return {
                ...state,
                addMode: action.x
            }
        }

        case 'EDIT-MODE-CHANGE': {
            return {
                ...state,
                books: state.books.map(item => item.id === action.id ? {...item, editMode: action.x}: item)
            }
        }

        default: {
            return state
        }
    }
}

export const addBookAC = (book: BookType) => ({type: 'ADD-BOOK', book} as const)
export const removeBookAC = (id: string) => ({type: 'REMOVE-BOOK', id} as const)
export const changeBookAC = (id: string, book: BookType) => {
    return {type: 'CHANGE-BOOK', id, book} as const
}
export const addModeChangeAC = (x: boolean) => ({type: 'ADD-MODE-CHANGE', x} as const)
export const editModeChangeAC = (id: string, x: boolean) => ({type: 'EDIT-MODE-CHANGE', id, x} as const)


type AddBookAT = ReturnType<typeof addBookAC>
type RemoveBookAT = ReturnType<typeof removeBookAC>
type ChangeBookAT = ReturnType<typeof changeBookAC>
type AddModeChangeAT = ReturnType<typeof addModeChangeAC>
type EditModeChangeAT = ReturnType<typeof editModeChangeAC>