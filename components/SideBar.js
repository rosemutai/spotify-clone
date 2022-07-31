import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faSearch, faMusic, faPlusSquare, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


const SideBar = () => {
  return (
    <div className="md:row-start-1 md:row-end-6 bg-black md:col-start-1 md:col-end-3 md:px-6 md:pt-12 
     md:fixed min-h-full">
        <div className="first-row icon-title md:flex md:justify-cent">
            <FontAwesomeIcon
                icon={faSpotify}
                className="text-gray-50 w-12 h-12"   
            />
            <h2 className="text-gray-50 font-bold text-2xl md:text-center md:mt-3 md:ml-1">Spotify</h2>
        </div>

        <div className="second-row md:mt-10 md:h-28 md:flex md:flex-col md:justify-between">
            <div className="home md:flex">
                <FontAwesomeIcon
                    icon={faHome}
                    className="text-gray-50 w-6 h-6"   
                />
                <p className="text-gray-50 font-semibold md:ml-4">Home</p>
           </div>

            <div className="search md:flex">
                <FontAwesomeIcon
                    icon={faSearch}
                    className="text-gray-50 w-6 h-6"   
                />
                <p className="text-gray-400 font-semibold md:ml-4">Search</p>
            </div>

            <div className="music-library md:flex">
                <FontAwesomeIcon
                    icon={faMusic}
                    className="text-gray-50 w-6 h-6"   
                />
                <p className="text-gray-400 font-semibold md:ml-4 ">Your Library</p>
            </div>            
        </div>

        <div className="third-row md:mt-12 md:h-16 md:flex md:flex-col md:justify-between">
             <div className="search md:flex">
                <FontAwesomeIcon
                    icon={faPlusSquare}
                    className="text-gray-50 w-6 h-6"   
                />
                <p className="text-gray-400 font-semibold md:ml-4">Create Playlist</p>
            </div>

             <div className="search md:flex">
                <FontAwesomeIcon
                    icon={faHeart}
                    className="text-gray-50 w-6 h-6 bg-violet-400 p-1 rounded"   
                />
                <p className="text-gray-400 font-semibold md:ml-4">Liked Songs</p>
            </div>

        </div>

        <div className="last-row  text-gray-50 md:mt-40 md:h-12 md:flex md:flex-col md:justify-between">
            <p className="text-gray-400 text-sm font-light">Cookies</p>
            <p className="text-gray-400 text-sm font-light">Privacy</p>
        </div>

        
    </div>
  )
}

export default SideBar