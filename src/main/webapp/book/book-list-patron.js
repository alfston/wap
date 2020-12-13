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
                                    {book.isbn} &nbsp; &ndash; &nbsp;
                                    {book.name} &nbsp; &ndash; &nbsp;
                                    {book.subject} &nbsp; &ndash; &nbsp;
                                    {book.publisher} &nbsp; &ndash; &nbsp;
                                    <a href={`../findAuthorById/${book.authorId}`}>
                                        {book.authorId}
                                    </a>
                                </td>


                            </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}
ReactDOM.render(
    <BookList/>, document.getElementById("root"))

