class LibrarianEditor extends React.Component {

    state = {
        librarian: {}
    }

    findLibrarianById = (id) =>
        findLibrarianById(id)
            .then(librarian => this.setState({librarian}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findLibrarianById(id)
    }

    saveLibrarian = () =>
        renameLibrarianPosition(this.state.librarian)

    render() {
        return(
            <div className="container">
                <h1>Librarian Editor {this.state.librarian.id}</h1>
                <input className="form-control" readOnly={true} value={this.state.librarian.id}/>
                <input
                    onChange={(event) => this.setState({
                        librarian: {
                            ...this.state.librarian,
                            role: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.librarian.position}/>
                <button onClick={this.saveLibrarian}>
                    Save
                </button>
                <a href="librarian-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <LibrarianEditor/>, document.getElementById("root"))