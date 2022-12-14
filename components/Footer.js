import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShuffle, faBackwardStep, faForwardStep, faPauseCircle,
  faListUl, faHardDrive, faVolumeMute, faRepeat } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <div className="grid">
      
      <div className="md:flex md:justify-between md:items-center md:pl-64 bg-neutral-800 border
        border-t-8 border-t-gray-400/20 w-full md:h-24 border-x-neutral-800 border-b-neutral-800
        bottom-0 right-0 md:fixed md:py-2 ">
          <div></div>
          <div className="play md:flex md:flex-col w-6/12"> 
              <div className="playlist-btns md:flex md:justify-between mx-auto md:mt-2">
                <div className="shuffle">
                  <FontAwesomeIcon
                    icon={faShuffle}
                    className="md:mr w-12 h-12 text-2xl text-gray-400/30"
                  />
                </div>

                <div className="previous">
                  <FontAwesomeIcon
                    icon={faBackwardStep}
                    className="md:mr w-12 h-12 text-2xl text-gray-400/30"
                  />
                </div>

                <div className="pause">
                  <FontAwesomeIcon
                    icon={faPauseCircle}
                    className="md:mr w-12 h-12 text-2xl text-gray-400/30"
                  />
                </div>

                <div className="next">
                  <FontAwesomeIcon
                    icon={faForwardStep}
                    className="md:mr w-12 h-12 text-2xl text-gray-400/30"
                  />
                </div>
                <div className="repeat">
                  <FontAwesomeIcon
                    icon={faRepeat}
                    className="md:mr w-12 h-12 text-2xl text-gray-400/30"
                  />
                  
                </div>
              </div>

              <div className="progress md:flex">
                <p className="md:mr-2 text-gray-400/30">0.00</p>
                  <div className="w-full ml-1 bg-gray-400/30 rounded-full h-1 md:mt-1.5"></div>
                <p className="md:ml-2 text-gray-400/30">0.00</p>
              </div>

          </div>

          <div className="right-side md:w-36 bg-red600 md:flex md:justify-between md:mt-3">
            <div className="queue">
              <FontAwesomeIcon
                    icon={faListUl}
                    className="text-gray-400 md:mr-3"
                  />
            </div>
            <div className="device">
              <FontAwesomeIcon
                    icon={faHardDrive}
                    className="text-gray-400 md:mr-3"
                  />
            </div>
            <div className="volume md:flex md:justify-between md:mt-1 md:mr-6">
              <FontAwesomeIcon
                    icon={faVolumeMute}
                    className="text-gray-400"
              />
              <div className="w-16 ml-1 bg-gray-50 rounded-full h-1 md:mt-1.5"></div>
            </div>
              
          </div>
      </div>

      
    </div>
  )
}

export default Footer








// const Footer = () => {
//   return (
//     <div className="grid">
//       <div className="md:flex md:justify-between bg-gradient-to-r from-purple-500 to-sky-500 w-full bottom-0 right-0 md:fixed md:py-2 md:mr-3">
//           <div className="ad md:flex md:flex-col ml-8 text-gray-50">
//               <p className="tracking-wider">PREVIEW SPOTIFY</p>
//               <p className="font-semibold">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>

//           </div>

//           <div>
//               <button className="signup-btn text-black font-bold bg-white mr-6
//               rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full py-3 px-8">Sign up free</button>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Footer