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

                                    <th>ID</th>{user.id} &nbsp; &ndash; &nbsp;
                                </td>
                                <td>
                                    <th>First</th>{user.first_name} &nbsp;
                                </td>
                                <td>
                                    <th>Last</th>{user.last_name} &nbsp; &ndash; &nbsp;
                                </td>
                                <td>
                                    <th>Role</th>{user.role} &nbsp;
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <a href="../librarian/Home.html">
                    Back
                </a>

            </div>
        )
    }
}

ReactDOM.render(
    <UserView/>, document.getElementById("root"))