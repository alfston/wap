class BookList extends React.Component {

    state = {
        books: []
    }

    findAllBooks = () =>
        findAllBooks()
            .then(books => this.setState({books}))

    componentDidMount = () =>
        this.findAllBooks()



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


                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <a href="../author/author-patron-list.html">
                                <h2> Search by Author </h2>
                                </a>

            </div>
        )
    }
}
ReactDOM.render(
    <BookList/>, document.getElementById("root"))

