class LibraryList extends React.Component {
   state = {
      libraries: []
   }

   findAllLibraries = () =>
      findAllLibraries()
         .then(libraries => this.setState({libraries}))

   componentDidMount = () =>
      this.findAllLibraries()

 render() {
   return(
     <div className="container">
       <h1>Select your library</h1>
       <table>
             {
                this.state.libraries.map(library =>
                <tr key={library.id}>
                   <td>
                       <a href="patron-or-librarian.html">
                   {library.name}
                   </a>
                   </td>
                </tr>
                )
             }
             </table>

     </div>
   )
 }
}

ReactDOM.render(
 <LibraryList/>, document.getElementById("root"))