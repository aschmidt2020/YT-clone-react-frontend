import "./HomePage.css"

const HomePage = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <ul className="ul-container">
                        {props.searchResults.map((result, index) => {
                            if ("snippet" in result) {
                                return (
                                    <li key={index} className="homepage-grid homepage-border">
                                        <button className="btn bg-transparent" onClick={() => props.getVideo(result)}>
                                            <div className="text-center"><button className="btn btn-light" onClick={() => props.getVideo(result)} data-toggle="popover" title="Watch" data-content="Watch" trigger="hover">
                                                <div className="video-thumbnail">
                                                    <img src={result.snippet.thumbnails.medium.url} className="img-fluid" alt={result.snippet.title}/>
                                                    <i className="play-button-homepage bi bi-play" role="img"></i>
                                                </div>
                                            </button>
                                                <h6 style={{ "marginLeft": "0.5em", "marginBottom": "0.5", "textAlign": "left" }}>{result.snippet.title}</h6>
                                                <p style={{ "marginLeft": "0.5em", "marginBottom": "0.5", "textAlign": "left" }}>{result.snippet.description}</p>
                                            </div>
                                        </button>
                                    </li>
                                )
                            }
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomePage;