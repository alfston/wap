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
                                    <th>ID</th>{author.id} &nbsp; &ndash; &nbsp;
                                </td>
                                <td>
                                    <th>Name</th>{author.name} &nbsp; &ndash; &nbsp;
                                </td>
                                <td>
                                    <th>Author Bio</th>{author.biography} &nbsp;

                                </td>
                                <td>
                                    <button onClick={() => this.deleteAuthor(author.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`author-editor.html?id=${author.id}`}>
                                        Edit &nbsp;
                                    </a>
                                </td>
                                <td>
                                   <a href={`../byAuthor/${author.id}`}>
                                      Search books by {author.name}
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

