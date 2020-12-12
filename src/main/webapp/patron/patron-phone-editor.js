class PatronPhoneEditor extends React.Component {

    state = {
        patron: {}
    }

    findPatronById = (id) =>
        findPatronById(id)
            .then(patron => this.setState({patron}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findPatronById(id)
    }

    Patron = () =>
        renamePhoneNumber(this.state.patron)

    render() {
        return(
            <div className="container">
                <h1>Phone Number Editor {this.state.Patron.phone_number}</h1>
                <input className="form-control" readOnly={true} value={this.state.patron.id}/>
                <input
                    onChange={(event) => this.setState({
                        patron: {
                            ...this.state.patron,
                            phone_number: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.patron.phone_number}/>
                <button onClick={this.savePatron}>
                    Save
                </button>
                <a href="patron-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <PatronPhoneEditor/>, document.getElementById("root"))