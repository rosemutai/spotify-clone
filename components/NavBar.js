import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,

} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="bg-zinc-900 md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-13 md:flex md:justify-between
        md:items-center py-3">
        <div className="md:flex">
            <FontAwesomeIcon
                icon={faAngleLeft}
                className="w-10 h-10 text-gray-50 bg-black/70 p-2 rounded-full md:ml-5"
            />
            <FontAwesomeIcon
                icon={faAngleRight}
                className="w-10 h-10 text-gray-200 bg-black p-2 rounded-full md:ml-3"
            />
        </div>

        <div className="sign-btns">
            <button className="signup-btn text-gray-300 font-semibold md:mr-9
                hover:text-white hover:font-bold">Sign Up</button>
            <button className="login-btn text-black font-bold bg-white
            rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full py-3 px-8 md:mr-8">Log in</button>
        </div>
    </div>
  )
}

export default NavBar