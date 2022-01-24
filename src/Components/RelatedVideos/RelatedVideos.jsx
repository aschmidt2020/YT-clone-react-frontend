import React, { useState } from 'react';

const RelatedVideos = (props) => {
    return (
        <div>
            <h4 style={{'marginBottom':'-1.5em'}}>Related: </h4>
            <table className="table table-sm table-striped table-hover text-align-center" style={{'marginTop' : '2em'}}>
            <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {props.playlist.map((result, index) => {
                if('snippet' in result){
                    return (
                        <tr key={result.id.videoId}>
                            <td><button onClick={() => props.getVideo(result)} data-toggle='popover' title='Watch' data-content='Watch' trigger='hover'><img src={result.snippet.thumbnails.default.url} /></button></td>
                            <td>
                            <h6 style={{'marginBottom':'0'}}>{result.snippet.title}</h6>
                            <p className='related-video-text'>{result.snippet.description.substring(0,100)}</p>
                            </td>
                        </tr>
                    )
                }
            })}
             
            </tbody>
            </table>
        </div>
    )
}
 
export default RelatedVideos;