class PatronList extends React.Component {


    state = {
        patrons: []
    }


    findAllPatrons = () =>
        findAllPatrons()
            .then(patrons => this.setState({patrons}))


    componentDidMount = () =>
        this.findAllPatrons()



    render() {
        return(
            <div>
                <h1>Account Info</h1>
                <h5> Please Click On Your Account </h5>
                <table>
                    <tbody>
                    {
                        this.state.patrons.map(patron =>
                            <tr>
                                <td>
                                    <a href="../item/item-list.html">
                                        {patron.id}
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

