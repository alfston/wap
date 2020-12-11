class LibraryList extends React.Component {
   state = {
      libraries: []
   }

   findAllLibraries = () =>
      findAllLibraries()
         .then(libraries => this.setState({libraries}))

   componentDidMount = () =>
      this.findAllLibraries()

   createLibrary = () =>
       createLibrary()
         .then(this.findAllLibraries)

         deleteLibrary = (id) =>
          deleteLibrary(id)
            .then(this.findAllLibraries)

 render() {
   return(
     <div className="container">
       <h1>Library List</h1>
       <table>
             {
                this.state.libraries.map(library =>
                <tr key={library.id}>
                   <td>
                   {library.name}
                   </td>
                </tr>
                )
             }
             </table>

              <button onClick={this.createLibrary}>
                    Create
                  </button>
                  <table>
                       {
                         this.state.libraries.map(library =>
                           <tr key={library.id}>
                             <td>
                               {library.name}
                             </td>
                             <td>
                               <button
                                 onClick={() => this.deleteLibrary(library.id)}>
                                 Delete
                               </button>
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