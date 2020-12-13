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
    deleteBook = (id) =>
        deleteBook(id)
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
                                    {book.isbn} &nbsp; &ndash; &nbsp;
                                    {book.name} &nbsp; &ndash; &nbsp;
                                    {book.subject} &nbsp; &ndash; &nbsp;
                                    {book.publisher} &nbsp; &ndash; &nbsp;
                                    <a href={`../findAuthorById/${book.authorId}`}>
                                                                                                                                                                                           {book.authorId}
                                     </a>
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.deleteBook(book.id)}>
                                        Delete
                                    </button>
                                </td>

                                <td>
                                    <a href={`book-editor.html?id=${book.isbn}`}>
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
                <a href="../author/author-list.html">
                <h2> Search by Author </h2>
                </a>
            </div>
        )
    }
}
ReactDOM.render(
    <BookList/>, document.getElementById("root"))

