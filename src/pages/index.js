import Head from 'next/head'
import { Prompt } from '@/components/Prompt'
import { Blobs } from '@/components/Blobs'
import { useConversationsStore } from "@/stores/conversations"


export default function Home() {
    const response = useConversationsStore(state => state.response)
    return (
        <>
            <Head>
                <title>AIproject</title>
                <meta name="description" content="component UI creation with AI" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='px-10 py-10 bg-black min-h-screen w-screen'>
                {/*<Blobs />*/}

                <h1 className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600
                text-6xl font-bold text-transparent bg-clip-text'>
                    Genera componentes con IA
                </h1>
                <div className='flex items-center h-full w-full'>
                    <div className='w-full'>
                        <Prompt />
                    </div>
                </div>
                <div>
                    {response}

                </div>
            </main>
        </>
    )
}
