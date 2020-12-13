class AccountView extends React.Component {

    state = {
        account: {}
    }

    findAccountById = (id) =>
        findAccountById(id)
            .then(account => this.setState({account}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findAccountById(id)
    }

    saveAccount = () =>
        renameAccount(this.state.account)

    render() {
        return(
            <div className="container">
                <h1>Account view {this.state.account.role}</h1>
                <input className="form-control" readOnly={true} value={this.state.account.id}/>
                <input
                    onChange={(event) => this.setState({
                        account: {
                            ...this.state.account,
                            role: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.account.state}/>
                <button onClick={this.saveAccount}>
                    Save
                </button>
                <a href="../patron/patron-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <AccountEditor/>, document.getElementById("root"))

