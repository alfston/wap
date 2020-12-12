class BookList extends React.Component {

    state = {
        book: []
    }

    findAllBooks = () =>
        findAllBooks()
            .then(book => this.setState({book}))

    componentDidMount = () =>
        this.findAllBooks()

    createBook = () =>
        createBook()
            .then(this.findAllBooks)


    render() {
        return(
            <div>
                <h1>Book List</h1>
                <table>
                    <tbody>
                    {
                        this.state.book.map(book =>
                            <tr>
                                <td>
                                    {book.id} &nbsp; &ndash; &nbsp;
                                    {book.name} &nbsp;
                                </td>
                                {/*// <td>*/}
                                {/*//     <button onClick={() => this.deleteUser(user.id)}>*/}
                                {/*//         Delete*/}
                                {/*//     </button>*/}
                                {/*// </td>*/}
                                <td>
                                    <a href={`book-editor.html?id=${book.id}`}>
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

