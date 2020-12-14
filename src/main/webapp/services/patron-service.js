const FIND_ALL_PATRONS = "http://localhost:8080/findAllPatrons"
const FIND_PATRON_BY_ID = "http://localhost:8080/findPatronById"
const DELETE_PATRON_URL = "http://localhost:8080/deletePatron"
const RENAME_ADDRESS = "http://localhost:8080/renameAddress"
const RENAME_PHONE_NUMBER = "http://localhost:8080/renamePhoneNumber"

const findAllPatrons = () =>
    fetch(`${FIND_ALL_PATRONS}`)
        .then(response => response.json())

const findPatronById = (id) =>
    fetch(`${FIND_PATRON_BY_ID}/${id}`)
        .then(response => response.json())

const deletePatron = (id) =>
    fetch(`${DELETE_PATRON_URL}/${id}`)

const renameAddress = (patron) =>
    fetch(`${RENAME_ADDRESS}/${patron.id}/${patron.address}`)
        .then(response => response.json())

const renamePhoneNumber = (patron) =>
    fetch(`${RENAME_PHONE_NUMBER}/${patron.id}/${patron.phone_number}`)
        .then(response => response.json())