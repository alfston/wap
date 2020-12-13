class AuthorEditor extends React.Component {

    state = {
        author: {}
    }

    findAuthorById = (id) =>
        findAuthorById(id)
            .then(author => this.setState({author}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findAuthorById(id)
    }

    saveAuthor = () =>
        renameAuthor(this.state.author)

    render() {
        return(
            <div className="container">
                <h1>Author Editor {this.state.author.role}</h1>
                <input className="form-control" readOnly={true} value={this.state.author.id}/>
                <input
                    onChange={(event) => this.setState({
                        author: {
                            ...this.state.author,
                            role: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.author.state}/>
                <button onClick={this.saveAuthor}>
                    Save
                </button>
                <a href="author-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <AuthorEditor/>, document.getElementById("root"))



