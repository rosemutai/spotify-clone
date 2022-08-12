import Script from 'next/script'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,

} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import rose from '../public/images/rose.jpg'

const NavBar = () => {
  return (
    <div className="grid">
      <Script 
        src="../node_modules/tw-elements/dist/js/index.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log("script loaded correctly, window has been populated")}
      />
      <div className="bg-zinc-900 md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-13 md:flex md:justify-between
          md:items-center py-3">
            
          <div className="md:flex">
              <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="w-4 h-4 p-2 text-gray-50 bg-black/50  rounded-full md:ml-20"
              />
              <FontAwesomeIcon
                  icon={faAngleRight}
                  className="w-4 h-4 p-2 text-gray-200 bg-black/50 rounded-full md:ml-3"
              />
          </div>

          <div className="sign-btns md:flex md:justify-between">
              {/* <button className="signup-btn text-gray-300 font-semibold md:mr-9
                  hover:text-white hover:font-bold">Sign Up</button> */}
            <button className="login-btn text-white font-semibold
                rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full py-1 px-4 md:mr-4
                border border-gray-400">Upgrade
            </button>
           <button id="dropdownMenuButton1" data-bs-toggle="dropdown" className="bg-black w-36 text-white md:mr-3 rounded-tl-full rounded-bl-full
            rounded-tr-full rounded-br-full flex dropdown-toggle ">   
             <Image
              src={rose}
              alt="rose mutai"
              width={30}
              height={30}
              className="rounded-full"
            />
            <h5 className="md:ml-2">rosemutai</h5>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-3 ml-2 md:mt-1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
           </button>

           <ul
              className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none
              text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
              aria-labelledby="dropdownMenuButton1"
            >
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent      
                text-gray-700 hover:bg-gray-100" href="#">Action
              </a> 
            </li>
            <li>
              <a
                className="
                  dropdown-item text-sm py-2
                  
                  
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                "
                href="#"
                >Another action</a
              >
            </li>
            <li>
              <a
                className="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                "
                href="#"
                >Something else here</a
              >
            </li>
          </ul>
          
          </div>
      </div>
    </div>
  )
}

export default NavBar