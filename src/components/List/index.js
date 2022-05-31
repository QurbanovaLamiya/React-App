class List extends React.Component {
    render() {
        return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Blog</a>
                </li>
            </ul>
        )
    }
}