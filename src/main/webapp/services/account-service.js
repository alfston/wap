const FIND_ALL_ACCOUNTS = "http://localhost:8080/findAllAccounts"
const FIND_ACCOUNT_BY_NUMBER = "http://localhost:8080/findAccountByNumber"
const CREATE_ACCOUNT_URL = "http://localhost:8080/createAccount"
const DELETE_ACCOUNT_URL = "http://localhost:8080/deleteAccount"
const CHANGE_STATE = "http://localhost:8080/changeAccountState"
const BY_LIBRARY = "http://localhost:8080/byLibrary"
const BY_PATRON = "http://localhost:8080/byPatron"

const findAllAccounts = () =>
    fetch(`${FIND_ALL_ACCOUNTS}`)
        .then(response => response.json())

const findAccountByNumber = (id) =>
    fetch(`${FIND_ACCOUNT_BY_NUMBER}/${number}`)
        .then(response => response.json())

const createAccount = () =>
    fetch(`${CREATE_ACCOUNT_URL}`)
        .then(response => response.json())

const deleteAccount = (id) =>
    fetch(`${DELETE_ACCOUNT_URL}/${number}`)

const byLibrary = (id) =>
            fetch(`${BY_LIBRARY}/${id}`)
                .then(response => response.json())

const byPatron = (id) =>
            fetch(`${BY_PATRON}/${id}`)
                .then(response => response.json())


const changeAccountState = (account) =>
    fetch(`${CHANGE_STATE}/${account.number}/${account.state()}`)
        .then(response => response.json())

