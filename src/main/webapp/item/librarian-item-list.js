class LibrarianItemList extends React.Component {


    state = {
        items: []
    }


    findAllItems = () =>
        findAllItems()
            .then(items => this.setState({items}))


    componentDidMount = () =>
        this.findAllItems()


    createItem = () =>
        createItem()
            .then(this.findAllItems)


    deleteItem = (id) =>
        deleteItem(id)
            .then(this.findAllItems)


    render() {
        return(
            <div>
                <h1>Item List</h1>
                <table>
                    <tbody>
                    {
                        this.state.items.map(item =>
                            <tr>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    <button onClick={() => this.deleteItem(item.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`librarian-item-editor.html?id=${item.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createItem}>
                    Create
                </button>
            </div>
        )
    }
}


ReactDOM.render(
    <ItemList/>, document.getElementById("root"))

