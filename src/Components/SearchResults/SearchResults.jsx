import SearchBar from "../SearchBar/SearchBar";

const SearchResults = (props) => {

    return (
        <div>
            <div className="row">

                <div className="col-1">
                    {/* empty column for spacing */}
                </div>

                <div className="col-10">
                    <h4 style={{ "marginBottom": "-1.5em" }}>Search Results: </h4>
                    <table className="table table-sm table-striped table-hover text-align-center" style={{ "marginTop": "2em" }}>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.searchResults.map((result, index) => {
                                if ("snippet" in result) {
                                    return (
                                        <tr key={result.id.videoId}>
                                            <td className="text-center"><button className="btn btn-light" onClick={() => props.getVideo(result)} data-toggle="popover" title="Watch" data-content="Watch" trigger="hover">
                                                <div className="video-thumbnail">
                                                    <img src={result.snippet.thumbnails.medium.url} />
                                                    <i className="play-button bi bi-play" role="img"></i>
                                                </div>
                                            </button></td>
                                            <td>
                                                <h5 style={{ "marginBottom": "0" }}>{result.snippet.title}</h5>
                                                <p>{result.snippet.description}</p>
                                                <p><small>Channel: {result.snippet.channelTitle}</small></p>
                                                <p><small>Published: {result.snippet.publishedAt}</small></p>
                                            </td>
                                        </tr>

                                    )
                                }
                            }
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="col-1">
                    {/* empty column for spacing */}
                </div>
            </div>
        </div>
    )

}

export default SearchResults;

//<img src={result.snippet.thumbnails.default.url} />