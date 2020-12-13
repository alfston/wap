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
                                    <th>ISBN</th>{book.isbn} &nbsp; &ndash; &nbsp;
                                </td>
                                <td>
                                    <th>Name</th>{book.name} &nbsp; &ndash; &nbsp;
                                </td>
                                 <td>
                                     <th>Subject</th>{book.subject} &nbsp; &ndash; &nbsp;
                                 </td>
                                <td>
                                    <th>Publisher</th>{book.publisher} &nbsp; &ndash; &nbsp;
                                </td>
                                <td>
                                    <th>AuthorID</th><a href={`../findAuthorById/${book.authorId}`}>
                                                                                                                                                                                           {book.authorId}
                                     </a>
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.deleteBook(book.isbn)}>
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

