import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import aa from '../public/images/aa.jpg'
import hhh from '../public/images/hhh.jpg'
import gg from '../public/images/gg.jpg'
import ss from '../public/images/ss.jpg'
import ww from '../public/images/ww.jpg'

const MainContent = () => {
  return (
    <div className="bg-neutral-800 md:row-start-2 md:row-end-7 md:col-start-3 md:col-end-13 ">
        <div className="editor-title md:flex md:justify-between">
            <h2 className="text-gray-50 text-2xl font-bold md:ml-6 md:my-6">Editors Picks</h2>
            <a className="text-gray-300  md:mt-6 md:mr-3">SEE ALL</a>
        </div>

        <div className="first-row-music-cards md:flex md:justify-center md:px-4">
            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
              transition-opacity hover:ease-linear relative group ">
                
              <FontAwesomeIcon 
                icon={faPlay}
                className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                absolute inset-y-47% right-10% z-50"
              />
              <Image
                src={aa}
                alt="hip hop"
                width={200}
                height={200}
              />
              <h4 className='text-gray-50 font-bold my-2'>Zilizopedwa</h4>
              <p className='text-gray-400'>Chill & Rewind to these classic Hits from the 80...</p>

            </div>

            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
              transition-opacity hover:ease-linear relative group ">
                 <FontAwesomeIcon 
                icon={faPlay}
                className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                absolute inset-y-47% right-10% z-50"
              />
              <Image
                src={hhh}
                alt="hip hop"
                 width={200}
                height={200}
              />
               <h4 className='text-gray-50 font-bold my-2'>Fresh & Chill</h4>
              <p className='text-gray-400'>Discover your favorite new chill pop songs...</p>
            </div>

            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-47% right-10% z-50"
                />
              <Image
                src={gg}
                alt="hip hop"
                 width={200}
                height={200}
              />
               <h4 className='text-gray-50 font-bold my-2'>Good Vibes</h4>
              <p className='text-gray-400'>Set it off with these epic anthems. Only good...</p>
            </div>

            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
              transition-opacity hover:ease-linear relative group ">
               <FontAwesomeIcon 
                icon={faPlay}
                className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                absolute inset-y-47% right-10% z-50"
              />
              <Image
                src={ww}
                alt="hip hop"
                 width={200}
                height={200}
              />
               <h4 className='text-gray-50 font-bold my-2'>I Love My 90s Hip-... Chill</h4>
              <p className='text-gray-400 '>Real rap music from the golden era.</p>
            </div>

            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
              transition-opacity hover:ease-linear relative group ">
              <FontAwesomeIcon 
                icon={faPlay}
                className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                absolute inset-y-47% right-10% z-50"
              />
              <Image
                src={ss}
                alt="hip hop"
                 width={200}
                height={200}
              />
              <h4 className='text-gray-50 font-bold my-2'>Chill Hits</h4>
              <p className='text-gray-400'>Kick back to the best new and recent chill hits.</p>
            </div>
        </div>

         <div className="editor-title md:flex md:flex-col">
            <h2 className="text-gray-50 text-2xl font-bold md:ml-6 md:mt-8 ">Focus</h2>
            <p className="text-gray-400  md:mt-3 md:ml-6">Music to help you concentrate</p>
        </div>

        <div className="second-row-music-cards md:flex md:justify-center md:px-4 md:mt-5">
            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
              transition-opacity hover:ease-linear relative group ">
                
              <FontAwesomeIcon 
                icon={faPlay}
                className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                absolute inset-y-47% right-10% z-50"
              />
              <Image
                src={aa}
                alt="hip hop"
                width={200}
                height={200}
              />
              <h4 className='text-gray-50 font-bold my-2'>Zilizopedwa</h4>
              <p className='text-gray-400'>Chill & Rewind to these classic Hits from the 80...</p>

            </div>

            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
              transition-opacity hover:ease-linear relative group ">
                 <FontAwesomeIcon 
                icon={faPlay}
                className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                absolute inset-y-47% right-10% z-50"
              />
              <Image
                src={hhh}
                alt="hip hop"
                 width={200}
                height={200}
              />
               <h4 className='text-gray-50 font-bold my-2'>Fresh & Chill</h4>
              <p className='text-gray-400'>Discover your favorite new chill pop songs...</p>
            </div>

            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-47% right-10% z-50"
                />
              <Image
                src={gg}
                alt="hip hop"
                 width={200}
                height={200}
              />
               <h4 className='text-gray-50 font-bold my-2'>Good Vibes</h4>
              <p className='text-gray-400'>Set it off with these epic anthems. Only good...</p>
            </div>

            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
              transition-opacity hover:ease-linear relative group ">
               <FontAwesomeIcon 
                icon={faPlay}
                className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                absolute inset-y-47% right-10% z-50"
              />
              <Image
                src={ww}
                alt="hip hop"
                 width={200}
                height={200}
              />
               <h4 className='text-gray-50 font-bold my-2'>I Love My 90s Hip-... Chill</h4>
              <p className='text-gray-400 '>Real rap music from the golden era.</p>
            </div>

            <div className="card w-56 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-3 hover:bg-neutral-700/80
              transition-opacity hover:ease-linear relative group ">
              <FontAwesomeIcon 
                icon={faPlay}
                className="bg-green-500  w-12 h-12 p-4 rounded-full opacity-0 group-hover:opacity-100 
                absolute inset-y-47% right-10% z-50"
              />
              <Image
                src={ss}
                alt="hip hop"
                 width={200}
                height={200}
              />
              <h4 className='text-gray-50 font-bold my-2'>Chill Hits</h4>
              <p className='text-gray-400'>Kick back to the best new and recent chill hits.</p>
            </div>
        </div>

    </div>
  )
}

export default MainContent