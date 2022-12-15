import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Disney</title>
        <meta name="description" content="Disney clone by Nii Adotei Brown" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
      </main>
    </>
  )
}
