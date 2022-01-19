import React, { useState } from 'react';

const RelatedVideos = (props) => {
    return (
        <div>
            <h4>Related videos: </h4>
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
            {props.playlist.map((result, index) => {
                return (
            <tr key={result.id.videoId}>
                <td>{index + 1}</td>
                {'snippet' in result 
                    ? <td>{result.snippet.title}</td>
                    : <td>NO SNIPPET AVAILABLE</td>}
                {'snippet' in result 
                    ? <td>{result.snippet.description.substring(0,100)}</td>
                    : <td>NO SNIPPET AVAILABLE</td>}
                
                <td><button onClick={() => props.getVideo(result)}>Watch</button></td>
            </tr>
                    
            )}
            )}
            </tbody>
            </table>
        </div>
    )
}
 
export default RelatedVideos;