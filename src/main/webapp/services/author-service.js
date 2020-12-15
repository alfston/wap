const FIND_ALL_AUTHORS = "http://localhost:8080/findAllAuthors"
const FIND_AUTHOR_BY_ID = "http://localhost:8080/findAuthorById"
const CREATE_AUTHOR_URL = "http://localhost:8080/createAuthor"
const DELETE_AUTHOR_URL = "http://localhost:8080/deleteAuthor"
const REWRITE_BIOGRAPGHY = "http://localhost:8080/rewriteBiography"

const findAllAuthors = () =>
    fetch(`${FIND_ALL_AUTHORS}`)
        .then(response => response.json())

const findAuthorById = (id) =>
    fetch(`${FIND_AUTHOR_BY_ID}/${id}`)
        .then(response => response.json())

const createAuthor = () =>
    fetch(`${CREATE_AUTHOR_URL}`)
        .then(response => response.json())

const deleteAuthor = (id) =>
    fetch(`${DELETE_AUTHOR_URL}/${id}`)

const rewriteBiography = (user) =>
    fetch(`${REWRITE_BIOGRAPGHY}/${user.id}/${author.biography}`)
        .then(response => response.json())

