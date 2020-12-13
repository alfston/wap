class AuthorList extends React.Component {

    state = {
        authors: []
    }

    findAllAuthors = () =>
        findAllAuthors()
            .then(authors => this.setState({authors}))

    componentDidMount = () =>
        this.findAllAuthors()

    createAuthor = () =>
        createAuthor()
            .then(this.findAllAuthors)

    deleteAuthor = (id) =>
        deleteAuthor(id)
            .then(this.findAllAuthors)

    render() {
        return(
            <div>
                <h1>Author List</h1>
                <table>
                    <tbody>
                    {
                        this.state.authors.map(author =>
                            <tr>
                                <td>
                                    {author.id} &nbsp; &ndash; &nbsp;
                                    {author.name} &nbsp; &ndash; &nbsp;
                                    {author.biography} &nbsp;

                                </td>
                                <td>
                                    <button onClick={() => this.deleteAuthor(author.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`author-editor.html/${author.id}`}>
                                        Edit &nbsp;
                                    </a>
                                </td>
                                <td>
                                   <a href={`../byAuthor/${author.id}`}>
                                      Search books by {author.name} Author
                                   </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createAuthor}>
                    Create
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <AuthorList/>, document.getElementById("root"))

