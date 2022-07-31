import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-min overflow-x-hidden relative">
      <Head>
        <title>spotify clone</title>
        <meta name="rose mutai" content="created by Rose Mutai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid min-h-screen'>
        <SideBar />
        <NavBar />
        <MainContent />
        <Footer />

        
      </main>

      
    </div>
  )
}
