class UserView extends React.Component {

    state = {
        users: []
    }

    findAllUsers = () =>
        findAllUsers()
            .then(users => this.setState({users}))

    componentDidMount = () =>
        this.findAllUsers()

    createUser = () =>
        createUser()
            .then(this.findAllUsers)

    deleteUser = (id) =>
        deleteUser(id)
            .then(this.findAllUsers)

    render() {
        return(
            <div>
                <h1>User List</h1>
                <table>
                    <tbody>
                    {
                        this.state.users.map(user =>
                            <tr>
                                <td>
                                    {user.id} &nbsp; &ndash; &nbsp;
                                    {user.first_name} &nbsp;
                                    {user.last_name} &nbsp; &ndash; &nbsp;
                                    {user.role} &nbsp;
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
    <UserView/>, document.getElementById("root"))