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

                                    {account.number} &nbsp;
                                    {account.state} &nbsp;
                                    {account.item1} &nbsp;
                                    {account.item2} &nbsp;
                                    {account.item3} &nbsp;

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

