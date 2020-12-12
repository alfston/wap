
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
                            <tr key={account.id}>
                                <td>
                                    {account.id} &nbsp; &ndash; &nbsp;
                                      {account.state} &nbsp;
                                      {account.item1.toString()} &nbsp; &ndash; &nbsp;
                                      {account.item2} &nbsp;
                                </td>

                                <td>
                                    <button onClick={() => this.deleteAccount(account.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`account-editor.html?id=${account.id}`}>
                                        Edit
                                    </a>
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

