import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import DownloadButton from '@/comps/downloadButton'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
      <div className='nes-container is-rounded' id="messageContainer">
        <div className="nes-balloon from-right" id="messageBubble">
          <p>Please click the following download button to gain acess to a the desktop application that will allow you to run the machine learning scripts.</p>
        </div>
        <p className='Rahul'>Rahul</p>
        <div className="nes-balloon from-left" id="messageBubble">
          <p>We hope you have fun  interacting with the application!</p>
        </div>
        <p className='Ishan'>Ishan</p>
      </div>
  
      <div className="nes-container is-dark with-title is-centered" id="downloadContainer">
        <p className="title">Download Desktop App</p>
      <DownloadButton>Download</DownloadButton>
    </div>
   </div>
  )
}



