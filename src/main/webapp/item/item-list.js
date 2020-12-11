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
                <h1>Item List</h1>
                <table>
                    <tbody>
                    {
                        this.state.items.map(item =>
                            <tr>
                                <td>
                                        {item.id}
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

