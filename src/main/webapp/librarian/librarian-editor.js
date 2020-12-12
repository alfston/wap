class LibrarianList extends React.Component {

    state = {
        librarians: []
    }

    findAllLibrarians = () =>
        findAllLibrarians()
            .then(librarians => this.setState({librarians}))

    componentDidMount = () =>
        this.findAllLibrarians()

    createLibrarian = () =>
      createLibrarian()
        .then(this.findAllLibrarians)



// deleteLibrarian = (id) =>
//        deleteLibrarian(id)
//            .then(this.findAllLibrarians)


    render() {
        return(
            <div>
                <h1>Librarian Positions</h1>
                <table>
                    <tbody>
                        {
                            this.state.librarians.map(librarian =>
                                <tr>
                                    <td>
                                        {librarian.id} &nbsp; &ndash; &nbsp;
                                        {librarian.position} &nbsp;
                                    </td>
                                    // <td>
                                    //     <button onClick={() => this.deleteUser(user.id)}>
                                    //         Delete
                                    //     </button>
                                    // </td>
                                    <td>
                                        <a href={`librarian-edit-page.html?id=${librarians.id}`}>
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button onClick={this.createLibrarian}>
                    Create
                </button>
            </div>
        )
    }
}
//     render() {
//         return(
//             <div>
//                 <h1>Librarians</h1>
//                 <table>
//                     <tbody>
//                         {
//                             this.state.librarians.map(librarian =>
//                                 <tr>
//                                     <td>
//                                         {librarian.id}
//                                     </td>
//                                     <td>
//                                         {librarian.position}
//                                     </td>
//                                     // <td>
//                                     //     <button onClick={() => this.deleteLibrarian(Librarian.id)}>
//                                     //         Delete
//                                     //     </button>
//                                     // </td>
//                                     <td>
//                                         <a href={`librarian-editor.html?id=${librarian.id}`}>
//                                             Edit
//                                         </a>
//                                     </td>
//                                 </tr>
//                             )
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <LibrarianList/>, document.getElementById("root"))