class ItemList extends React.Component {
    state = {
        items: []
    }

    findAllItems = () =>
        findAllItems()
            .then(items => this.setState({items}))

    componentDidMount = () =>
        this.findAllItems()


    render() {
        return(
            <div>

                <h1>Account Info</h1>
                <h5> Please Click On Your Account </h5>

                <h1>Items</h1>

                <table>
                    <tbody>
                    {
                        this.state.items.map(item =>
                            <tr>
                                <td>

                                    <a href="../item/item-list.html">
                                        {item.id}
                                    </a>
                                </td>


                                {item.id}


                                <td>
                                    <a href={`item-list.html?id=${item.id}`}>
                                        View Items
                                    </a>
                                </td>
                                <td>
                                    <button onClick={() => this.deleteItem(item.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`Item-editor.html?id=${item.id}`}>
                                        Edit
                                    </a>
                                </td>

                            </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}


ReactDOM.render(
    <ItemList/>, document.getElementById("root"))



