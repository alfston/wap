class PatronList extends React.Component {

    state = {
        patrons: []
    }

    findAllPatrons = () =>
        findAllPatrons()
            .then(patrons => this.setState({patrons}))

    componentDidMount = () =>
        this.findAllPatrons()

    renamePhoneNumber = (id, newPhone) =>
        renamePhoneNumber(id, newPhone)
            .then(this.findAllPatrons)

    renameAddress = (id, newAddress) =>
        renameAddress(id, newAddress)
            .then(this.findAllPatrons)

    deletePatron = (id) =>
        deletePatron(id)
            .then(this.findAllPatrons)

    render() {
        return(
            <div>
                <h1>Patrons</h1>
                <table>
                    <tbody>
                    {
                        this.state.patrons.map(patron =>
                            <tr>
                                <td>
                                    {patron.id}

                                </td>
                                <td>
                                    <a href={`item-list.html?id=${patron.id}`}>
                                        View Items
                                    </a>
                                </td>
                                <td>
                                    <button onClick={() => this.deletePatron(patron.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`Patron-editor.html?id=${patron.id}`}>
                                        Edit
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
    <PatronList/>, document.getElementById("root"))
