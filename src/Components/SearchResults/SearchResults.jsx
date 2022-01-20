import SearchBar from "../SearchBar/SearchBar";

const SearchResults = (props) => {

    return ( 
        <div>
            <h4>Search Results: </h4>
            <table className="table table-sm table-striped table-hover text-align-center" style={{'marginTop' : '2em'}}>
            <thead>
            <tr>
                <th>#</th>
                <th>Video Title</th>
                <th>Video Description</th>
                <th>Watch Video</th>
            </tr>
            </thead>
            <tbody>
            {props.searchResults.map((result, index) => {
                return (
            <tr key={result.id.videoId}>
                <td>{index + 1}</td>
                {'snippet' in result 
                ? <td>{result.snippet.title}</td>
                : <td>NO SNIPPED AVAILABLE</td>
                }
                {'snippet' in result
                ? <td>{result.snippet.description.substring(0,100)}</td>
                : <td>NO SNIPPED AVAILABLE</td>
                }
                <td><button onClick={() => props.getVideo(result)}>Watch</button></td>
            </tr>
                    
            )}
            )}
            </tbody>
            </table>
        </div>
    )

}
 
export default SearchResults;