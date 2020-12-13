class AccountList extends React.Component {

    state = {
        accounts: []
    }

    findAllAccounts = () =>
        findAllAccounts()
            .then(accounts => this.setState({accounts}))

    componentDidMount = () =>
        this.findAllAccounts()

    createAccount = () =>
        createAccount()
            .then(this.findAllAccounts)

    deleteAccount = (id) =>
        deleteAccount(id)
            .then(this.findAllAccounts)

    render() {
        return(
            <div>
                <h1>Account List</h1>


                <table>
                    <tbody>
                    {
                        this.state.accounts.map(account =>
                            <tr>
                                <td>
                                    <th>Acct</th>{account.number} &nbsp;
                                </td>
                                <td>
                                    <th>State</th>{account.state} &nbsp;
                                </td>
                                <td>
                                    <th>Item 1</th>{account.item1} &nbsp;
                                </td>
                                <td>
                                    <th>Item 2</th>{account.item2} &nbsp;
                                </td>
                                <td>
                                    <th>Item 3</th>{account.item3} &nbsp;
                                </td>

                                <td>
                                    <button onClick={() => this.deleteAccount(account.id)}>
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createAccount}>
                    Create
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <AccountList/>, document.getElementById("root"))

