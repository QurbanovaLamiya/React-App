class Card extends React.Component {
    render() {
        let inlineStyle = {
            width: "18rem",
        }
        return (
            <div className="card container" style={inlineStyle}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJX1rBVSbRdcVSq6TfxG2D3xF_AVnoswSVfQ&usqp=CAU" className="card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-dark">Go somewhere</a>
                </div>
            </div>

        )
    }
}