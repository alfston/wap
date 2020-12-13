class BookEditor extends React.Component {

    state = {
        book: {}
    }

    findBookByISBN = (id) =>
        findBookByISBN(id)
            .then(book => this.setState({book}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findBookByISBN(id)
    }

    saveBook = () =>
        renameBook(this.state.book)

    render() {
        return(
            <div className="container">
                <h1>Book Editor {this.state.book.id}</h1>
                <input className="form-control" readOnly={true} value={this.state.book.id}/>
                <input
                    onChange={(event) => this.setState({
                        book: {
                            ...this.state.book,
                            role: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.book.name}/>
                <button onClick={this.saveBook}>
                    Save
                </button>
                <a href="book-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <BookEditor/>, document.getElementById("root"))

