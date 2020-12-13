class AccountView extends React.Component {

    state = {
        account: {}
    }

    findAccountById = (number) =>
        findAccountById(number)
            .then(account => this.setState({account}))

    componentDidMount = () => {
        const number = window.location.search.split("=")[1]
        this.findAccountById(number)
    }



    render() {
        return(
            <div className="container">
                <h1>Account Info</h1>
                <input className="form-control" readOnly={true} value={this.state.account.number}/>
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

