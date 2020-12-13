class LibrarianList extends React.Component {

    state = {
        librarian: []
    }

    findAllLibrarians = () =>
        findAllLibrarians()
            .then(librarian => this.setState({librarian}))

    componentDidMount = () =>
        this.findAllLibrarians()

    createLibrarian = () =>
        createLibrarian()
            .then(this.findAllLibrarians)


    render() {
        return(
            <div>
                <h1>Librarian Positions</h1>
                <table>
                    <tbody>
                    {
                        this.state.librarian.map(librarian =>
                            <tr>

                                <td>
                                    <th>ID</th>{librarian.id} &nbsp; &ndash; &nbsp;
                                </td>
                                <td>
                                    <th>Position</th>{librarian.position} &nbsp;
                                </td>
                                {/*// <td>
                                */}
                                {/*//     <button onClick={() => this.deleteUser(user.id)}>*/}
                                {/*//         Delete*/}
                                {/*//     </button>*/}
                                {/*// </td>*/}
                                <td>
                                    <a href={`librarian-editor.html?id=${librarian.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createLibrarian}>
                    Create
                </button>
            </div>
        )
    }
}
ReactDOM.render(
    <LibrarianList/>, document.getElementById("root"))