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



    render() {
        return(
            <div className="container">
                <h1>Account Info</h1>
                <input className="form-control" readOnly={true} value={this.state.account.id}/>
                <input className="form-control" readOnly={true} value={this.state.account.opened}/>
                <input className="form-control" readOnly={true} value={this.state.account.state}/>

                <a href="../patron/patron-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <AccountEditor/>, document.getElementById("root"))

