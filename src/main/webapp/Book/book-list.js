class BookList extends React.Component {

    state = {
        books: []
    }

    findAllBooks = () =>
        findAllBooks()
            .then(books => this.setState({books}))

    componentDidMount = () =>
        this.findAllBooks()

    createBook = () =>
        createBook()
            .then(this.findAllBooks)

    deleteBook = (isbn) =>
        deleteBook(isbn)
            .then(this.findAllBooks)

    render() {
        return(
            <div>
                <h1>Book List</h1>
                <table>
                    <tbody>
                    {
                        this.state.books.map(book =>
                            <tr>
                                <td>
                                    {book.ISBN}
                                    {book.name}

                                </td>
                                <td>
                                    <button onClick={() => this.deleteBook(book.ISBN)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`Book-editor.html?id=${book.ISBN}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createBook}>
                    Create
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <BookList/>, document.getElementById("root"))
