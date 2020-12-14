class PatronAddressEditor extends React.Component {

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

    savePatron = () =>
        renameAddress(this.state.patron)

    render() {
        return(
            <div className="container">
                <h1>Address Editor {this.state.patron.address}</h1>
                <input className="form-control" readOnly={true} value={this.state.patron.id}/>
                <input
                    onChange={(event) => this.setState({
                        patron: {
                            ...this.state.patron,
                            address: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.patron.address}/>
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
    <PatronAddressEditor/>, document.getElementById("root"))