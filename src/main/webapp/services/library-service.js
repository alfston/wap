const FIND_ALL_LIBRARIES = "http://localhost:8080/findAllLibraries"
const FIND_LIBRARY_BY_ID = "http://localhost:8080/findLibraryById"
const CREATE_LIBRARY_URL = "http://localhost:8080/createLibrary"
const DELETE_LIBRARY_URL = "http://localhost:8080/deleteLibrary"
const RENAME_LIBRARY = "http://localhost:8080/renameLibrary"

const findAllLibraries = () =>
 fetch(`${FIND_ALL_LIBRARIES}`)
   .then(response => response.json())

const findLibraryById = (id) =>
 fetch(`${FIND_LIBRARY_BY_ID}/${id}`)
   .then(response => response.json())

const createLibrary = () =>
 fetch(`${CREATE_LIBRARY_URL}`)
   .then(response => response.json())

const deleteLibrary = (id) =>
 fetch(`${DELETE_LIBRARY_URL}/${id}`)

const renameLibrary = (library) =>
 fetch(`${RENAME_LIBRARY}/${library.id}/${library.name}`)
   .then(response => response.json())