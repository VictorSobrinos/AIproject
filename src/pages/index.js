import Head from 'next/head'
//import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>AIproject</title>
                <meta name="description" content="component UI creation with AI" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='bg-black h-screen w-screen'>
                <h1 className='text-white'>
                    Hello world!
                </h1>
            </main>
        </>
    )
}
