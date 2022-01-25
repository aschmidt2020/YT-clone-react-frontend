const SearchResults = (props) => {

    return (
        <div>
            <div className="row">

                <div className="col-1">
                    {/* empty column for spacing */}
                </div>

                <div className="col-10">
                    <h4 style={{ "marginBottom": "-1.5em" }}>Search Results: </h4>
                    <table className="table table-sm table-striped text-align-center" style={{ "marginTop": "2em" }}>
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
                                            <button className="btn bg-transparent" onClick={() => props.getVideo(result)}>
                                                <td className="text-center"><button className="btn btn-light video-thumbnail" onClick={() => props.getVideo(result)} data-toggle="popover" title="Watch" data-content="Watch" trigger="hover">
                                                    <div>
                                                        <img src={result.snippet.thumbnails.medium.url} className="img-fluid" alt={result.snippet.title}/>
                                                        <i className="play-button-search bi bi-play" role="img"></i>
                                                    </div>
                                                </button></td>
                                                <td>
                                                    <h5 style={{ "marginBottom": "0" }}>{result.snippet.title}</h5>
                                                    <p>{result.snippet.description}</p>
                                                    <p><small>Channel: {result.snippet.channelTitle}</small></p>
                                                    <p><small>Published: {result.snippet.publishedAt}</small></p>
                                                </td>
                                            </button>
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