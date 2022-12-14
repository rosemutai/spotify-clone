import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import aa from '../public/images/aa.jpg'
import hhh from '../public/images/hhh.jpg'
import gg from '../public/images/gg.jpg'
import ss from '../public/images/ss.jpg'
import ww from '../public/images/ww.jpg'
import bb from '../public/images/bb.jpg'
import ff from '../public/images/ff.jpg'
import pp from '../public/images/pp.jpg'
import ll from '../public/images/ll.jpg'
import rr from '../public/images/rr.jpg'
import sad from '../public/images/sad.jpg'
import sauti from '../public/images/sauti.jpg'
import xx from '../public/images/xx.jpg'
import zz from '../public/images/zz.jpg'
import tt from '../public/images/tt.jpg'
import { getServerSideProps } from '../pages/api/playlists'
  const client_id = process.env.CLIENT_ID
  const client_secret = process.env.CLIENT_SECRET
  const refresh_token = process.env.REFRESH_TOKEN
   

  const basic = Buffer.from(`${client_id}: ${client_secret}`).toString('base64')
  const token_endpoint = `https://accounts.spotify.com/api/token`;


  // const getAccessToken = async () =>{
  //   const response = await fetch(token_endpoint, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Basic ${basic}`,
  //       'Content-Type': 'application/x-www-form-urlencoded'

  //     },
  //     body: {
  //       grant_type: 'refresh_token',
  //       refresh_token
  //     }
  //   })
  //   return response.json()

  // }

  // const getMyPlaylists = async () =>{
  //   const accessToken = await getAccessToken()

  //   return (getServerSideProps())
  // }

// const playListsFunc =  async (_, res) => {
//   const response = await getMyPlaylists();
//   const { items } = await response.json();

//   if(items){
//     const playlists = items.slice(0, 10).map((playlist) => ({
//     artist: playlist.artists.map((_artist) => _artist.name).join(', '),
//     songUrl: playlist.external_urls.spotify,
//     title: playlist.name
//     }));

//     return res.status(200).json({ playlists });

//   }

//   else{
//     console.log("no items to display")
//   }

  
  
// };

// console.log(playListsFunc())





const MainContent = () => {

  // console.log(songs)
  return (
    <div className="grid">
      <div className="bg-neutral-800 md:row-start-2 md:row-end-7 md:col-start-3 md:col-end-13 md:ml-32">
          <div className="editor-title flex justify-between">
              <h2 className="text-gray-50 text-2xl font-bold md:ml-24 my-6">Made For rosemutai</h2>
              <a className="text-gray-300 text-sm font-semibold md:mt-6 md:mr-10">SEE ALL</a>
          </div>

          <div className="first-row-music-cards flex md:justify-center md:ml-14 ">
              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                  
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={sauti}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Made In Kenya</h4>
                <p className='text-gray-400'>Proudly Kenyan gems made for the entire...</p>

              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                  <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={hhh}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Fresh & Chill</h4>
                <p className='text-gray-400'>Discover your favorite new chill pop songs...</p>
              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                  transition-opacity hover:ease-linear relative group ">
                  <FontAwesomeIcon 
                    icon={faPlay}
                    className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                    absolute inset-y-40% right-10% z-50"
                  />
                <Image
                  src={gg}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Good Vibes</h4>
                <p className='text-gray-400'>Set it off with these epic anthems. Only good...</p>
              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={ww}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>I Love My 90s Hip-... Chill</h4>
                <p className='text-gray-400 '>Real rap music from the golden era.</p>
              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={ss}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Chill Hits</h4>
                <p className='text-gray-400'>Kick back to the best new and recent chill hits.</p>
              </div>
          </div>

          <div className="editor-title flex justify-between">
              <div className="editor-title md:flex md:flex-col">
                <h2 className="text-gray-50 text-2xl font-bold md:ml-24 mt-8 ">Focus</h2>
                <p className="text-gray-400  md:mt-3 md:ml-24">Music to help you concentrate</p>
              </div>
              <a className="text-gray-300 text-sm font-semibold md:mt-6 md:mr-10">SEE ALL</a>
          </div>

          <div className="second-row-music-cards flex md:justify-center md:ml-14 md:mt-5">
              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                  
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={zz}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Iofi beats</h4>
                <p className='text-gray-400'>Chill & Rewind to these classic Hits from the 80...</p>

              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                  <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={xx}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Jazz in the Background</h4>
                <p className='text-gray-400'>Discover your favorite new chill pop songs...</p>
              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                  transition-opacity hover:ease-linear relative group ">
                  <FontAwesomeIcon 
                    icon={faPlay}
                    className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                    absolute inset-y-40% right-10% z-50"
                  />
                <Image
                  src={bb}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Peaceful piano</h4>
                <p className='text-gray-400'>Relax and indulge with beautiful piano places...</p>
              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={ff}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'> White Noise</h4>
                <p className='text-gray-400 '>Welcome to the soothing hum...</p>
              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={pp}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Deep Focus</h4>
                <p className='text-gray-400'>Keep calm and focus with ambient...</p>
              </div>
          </div>

            <div className="editor-title flex justify-between">
                <h2 className="text-gray-50 text-2xl font-bold md:ml-24 mt-8 ">Popular releases</h2>
                <a className="text-gray-300 text-sm font-semibold md:mt-6 md:mr-10">SEE ALL</a>
            </div>

          <div className="third-row-music-cards flex md:justify-center md:ml-14 md:mt-5">
              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                  
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={aa}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Night Rain</h4>
                <p className='text-gray-400'>Pouring rain and occassional...</p>

              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                  <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={ll}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>I do</h4>
                <p className='text-gray-400'>Joshua Baraka, BRYAN THE MENSAH.</p>
              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                  transition-opacity hover:ease-linear relative group ">
                  <FontAwesomeIcon 
                    icon={faPlay}
                    className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                    absolute inset-y-40% right-10% z-50"
                  />
                <Image
                  src={rr}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>Antithesis</h4>
                <p className='text-gray-400'>Kay Faith</p>
              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md md:mr-5 hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={sad}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>New Music Friday</h4>
                <p className='text-gray-400 '>Te very best in new music from aound the...</p>
              </div>

              <div className="card w-48 h-80 p-3 bg-neutral-700/20 rounded-md hover:bg-neutral-700/80
                transition-opacity hover:ease-linear relative group ">
                <FontAwesomeIcon 
                  icon={faPlay}
                  className="bg-green-500  w-4 h-4 p-4 rounded-full opacity-0 group-hover:opacity-100 
                  absolute inset-y-40% right-10% z-50"
                />
                <Image
                  src={tt}
                  alt="hip hop"
                  width={200}
                  height={200}
                  className="rounded"
                />
                <h4 className='text-gray-50 font-bold my-2'>River</h4>
                <p className='text-gray-400'>Basthma</p>
              </div>
          </div>

      </div>
    </div>
  )
}

export default MainContent