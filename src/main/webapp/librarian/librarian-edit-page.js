class LibrarianEditPage extends React.Component {

    state = {
        librarians: {}
    }

    findLibrarianById = (id) =>
        findLibrarianById(id)
            .then(librarians => this.setState({librarians}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findLibrarianById(id)
    }

    saveLibrarian = () =>
    renameLibrarianPosition(this.state.librarians)

    render() {
        return(
            <div className="container">
                <h1>Librarian Editor {this.state.librarians.position}</h1>
                <input className="form-control" readOnly={true} value={this.state.librarians.id}/>
                <input
                    onChange={(event) => this.setState({
                        librarians: {
                            ...this.state.librarians,
                            role: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.librarians.position}/>
                <button onClick={this.saveLibrarian}>
                    Save
                </button>
                <a href="librarian-editor.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <LibrarianEditPage/>, document.getElementById("root"))