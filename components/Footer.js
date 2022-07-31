const Footer = () => {
  return (
    <div className="md:flex md:justify-between bg-gradient-to-r from-purple-500 to-sky-500 w-full bottom-0 right-0 md:fixed md:py-2 md:mr-3">
        <div className="ad md:flex md:flex-col ml-8 text-gray-50">
            <p className="tracking-wider">PREVIEW SPOTIFY</p>
            <p className="font-semibold">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>

        </div>

        <div>
             <button className="signup-btn text-black font-bold bg-white mr-6
            rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full py-3 px-8">Sign up free</button>
        </div>
    </div>
  )
}

export default Footer