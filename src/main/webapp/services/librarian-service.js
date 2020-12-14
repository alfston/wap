const FIND_ALL_LIBRARIANS = "http://localhost:8080/findAllLibrarians"
const FIND_LIBRARIAN_BY_ID = "http://localhost:8080/findLibrarianById"
const DELETE_LIBRARIAN_URL = "http://localhost:8080/deleteLibrarian"
const CREATE_LIBRARIAN_URL = "http://localhost:8080/createLibrarian"
const RENAME_LIBRARIAN_POSITION = "http://localhost:8080/renameLibrarianPosition"

const findAllLibrarians = () =>
    fetch(`${FIND_ALL_LIBRARIANS}`)
        .then(response => response.json())

const findLibrarianById = (id) =>
    fetch(`${FIND_LIBRARIAN_BY_ID}/${id}`)
        .then(response => response.json())

const createLibrarian = () =>
    fetch(`${CREATE_LIBRARIAN_URL}`)
        .then(response => response.json())

const deleteLibrarian = (id) =>
    fetch(`${DELETE_LIBRARIAN_URL}/${id}`)

const renameLibrarianPosition = (librarian) =>
    fetch(`${RENAME_LIBRARIAN_POSITION}/${librarian.id}/${librarian.position}`)
        .then(response => response.json())