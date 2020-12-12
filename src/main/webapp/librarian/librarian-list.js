class LibrarianList extends React.Component {

    state = {
        librarians: []
    }


    render() {
        return(
            <div>
                <h1>Librarians</h1>
                <table>
                    <tbody>
                        {
                            this.state.librarians.map(librarian =>
                                <tr>
                                    <td>
                                        {librarian.id}
                                    </td>
                                    <td>
                                        {librarian.position}
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
    <LibrarianList/>, document.getElementById("root"))