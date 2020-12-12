class PatronList extends React.Component {



    state = {
        patrons: []
    }



    findAllPatrons = () =>
        findAllPatrons()
            .then(patrons => this.setState({patrons}))



    componentDidMount = () =>
        this.findAllPatrons()



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

                <h1>Account Info</h1>
                <h5> Please Click On Your Account </h5>

                <h1>Patrons</h1>

                <table>
                    <tbody>
                    {
                        this.state.patrons.map(patron =>
                            <tr>
                                <td>

                                    <a href="../item/item-list.html">

                                    </a>
                                </td>


                                    {patron.id} &nbsp; &ndash; &nbsp;

                           
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
                                    <a href={`patron-editor.html?id=${patron.id}`}>
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



