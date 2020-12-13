class AuthorEditor extends React.Component {

    state = {
        author: {}
    }

    findAuthorById = (id) =>
        findAuthorById(id)
            .then(author => this.setState({author}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findAuthorById(id)
    }



    render() {
        return(
            <div className="container">
                <h1>Author</h1>


                <a href="author-list.html">
                    View All Authors
                </a>
            </div>

    }
}

ReactDOM.render(
    <AuthorEditor/>, document.getElementById("root"))

