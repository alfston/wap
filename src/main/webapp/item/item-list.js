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
     <div className="container">
       <h1>Item List</h1>
       <table>
             {
                this.state.items.map(item =>
                <tr key={item.id}>
                   <td>
                   {item.name}
                   </td>
                </tr>
                )
             }
             </table>

              <button onClick={this.createItem}>
                    Create
                  </button>
                  <table>
                       {
                         this.state.items.map(item =>
                           <tr key={item.id}>
                             <td>
                               {item.name}
                             </td>
                             <td>
                               <button
                                 onClick={() => this.deleteItem(item.id)}>
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
 <ItemList/>, document.getElementById("root"))