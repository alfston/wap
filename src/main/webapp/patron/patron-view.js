class PatronView extends React.Component {
        render() {
        return(
            <div>
                <h1 ><a href="../book/book-list-patron.html">View Catalog Here</a></h1>
                <h1 ><a href="../patron/patron-list.html">View Account Info Here</a></h1>

            </div>
        )
    }
}


ReactDOM.render(
    <PatronView/>, document.getElementById("root"))

