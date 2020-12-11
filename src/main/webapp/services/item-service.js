const FIND_ALL_ITEMS = "http://localhost:8080/findAllItems"
const FIND_ITEM_BY_ID = "http://localhost:8080/findItemById"
const CREATE_ITEM_URL = "http://localhost:8080/createItem"
const DELETE_ITEM_URL = "http://localhost:8080/deleteItem"
const RENAME_ITEM = "http://localhost:8080/renameItem"

const findAllItems = () =>
 fetch(`${FIND_ALL_ITEMS}`)
   .then(response => response.json())

const findItemById = (id) =>
 fetch(`${FIND_ITEM_BY_ID}/${id}`)
   .then(response => response.json())

const createItem = () =>
 fetch(`${CREATE_ITEM_URL}`)
   .then(response => response.json())

const deleteItem = (id) =>
 fetch(`${DELETE_ITEM_URL}/${id}`)

const renameItem = (item) =>
 fetch(`${RENAME_ITEM}/${item.id}/${item.name}`)
   .then(response => response.json())