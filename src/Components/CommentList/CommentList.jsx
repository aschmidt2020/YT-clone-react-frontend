const CommentList = (props) => {
    return ( 
        <div>
            <h4>Comments: </h4>
            <table className="table table-sm table-striped table-hover text-align-center" style={{'marginTop' : '2em'}}>
            <thead>
            <tr>
                <th>User</th>
                <th>Comment</th>
            </tr>
            </thead>
            <tbody>
            {props.comments && props.comments.map((comment) => {
                return (
            <tr key={comment.id}>
                <td>{comment.user.username}</td>
                <td>{comment.text}</td>
                <td><button>Update Comment</button></td>
            </tr>
                    
            )}
            )}
            </tbody>
            </table>
        </div>
     );
}
 
export default CommentList;