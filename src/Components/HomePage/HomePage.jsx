import SearchBar from "../SearchBar/SearchBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SearchResults from "../SearchResults/SearchResults";

const HomePage = (props) => {
    return ( 
        <div>
            <SearchBar universalSearch={props.universalSearch}/>
            <VideoPlayer video={props.video} playlist={props.playlist} getVideo={props.getVideo} />
            <SearchResults searchResults={props.searchResults} getVideo={props.getVideo}/>
        </div>
     );
}
 
export default HomePage;