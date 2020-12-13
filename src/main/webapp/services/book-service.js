const FIND_ALL_BOOKS = "http://localhost:8080/findAllBooks"
const FIND_USER_BY_ISBN = "http://localhost:8080/findUserByISBN"
const CREATE_BOOK_URL = "http://localhost:8080/createBook"
const DELETE_BOOK_URL = "http://localhost:8080/deleteBook"
const RENAME_BOOK = "http://localhost:8080/renameBook"
const BY_AUTHOR = "http://localhost:8080/byAuthor"

const findAllBooks = () =>
    fetch(`${FIND_ALL_BOOKS}`)
        .then(response => response.json())

const findUserByISBN = (id) =>
    fetch(`${FIND_USER_BY_ISBN}/${id}`)
        .then(response => response.json())

const createBook = () =>
    fetch(`${CREATE_BOOK_URL}`)
        .then(response => response.json())

const deleteBook = (id) =>
    fetch(`${DELETE_BOOK_URL}/${id}`)

const renameUser = (user) =>
    fetch(`${RENAME_BOOK}/${user.id}/${user.role}`)
        .then(response => response.json())

const byAuthor = (id) =>
    fetch(`${BY_AUTHOR}/${id}`)
         .then(response => response.json())