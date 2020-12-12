class ItemList extends React.Component {

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

                <h6>ISBN LANG FORMAT  DATE BORROWED</h6>
                <table>
                    <tbody>
                    {
                        this.state.items.map(item =>
                            <tr>
                                <td>
                                    {item.isbn} &nbsp;
                                    {item.lang} &nbsp;
                                    {item.format} &nbsp;
                                    {item.borrowed} &nbsp;
                                    {item.isOverDue} &nbsp;


                                </td>
                                <td>
                                    <button onClick={() => this.deleteItem(item.id)}>
                                        Delete
                                    </button>
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

