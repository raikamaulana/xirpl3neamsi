import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>XIRPL3NEAMSI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="xirpl3/xirpl3photoprofil.png" />
      </Head>
      <Hero heading='Welcome to XI RPL 3' message='this is our journey' book='Gallery'/>
    </>
  )
}
