class librarianItemEditor extends React.Component {


    state = {
        item: {}
    }


    findItemById = (id) =>
        findItemById(id)
            .then(item => this.setState({item}))


    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findItemById(id)
    }


    saveItem = () =>
        renameItem(this.state.item)


    render() {
        return(
            <div className="container">
                <h1>Item Editor {this.state.item.title}</h1>
                <input className="form-control" readOnly={true} value={this.state.item.id}/>
                <input
                    onChange={(event) => this.setState({
                        item: {
                            ...this.state.item,
                            title: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.item.title}/>
                <button onClick={this.saveItem}>
                    Save
                </button>
                <a href="librarian-item-list.html">
                    Done
                </a>
            </div>
        )
    }
}


ReactDOM.render(
    <ItemEditor/>, document.getElementById("root"))

