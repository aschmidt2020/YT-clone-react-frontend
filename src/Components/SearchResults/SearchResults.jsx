
const SearchResults = (props) => {

    return ( 
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
            <td>{result.snippet.title}</td>
            <td>{result.snippet.description}</td>
            <td><button onClick={() => props.getVideo(result)}>Watch</button></td>
           </tr>
                
          )}
          )}
        </tbody>
          
        </table>
    )
}
 
export default SearchResults;