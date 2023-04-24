import React from 'react'
import Head from 'next/head'
import web404 from '@/public/404.svg'
import Image from 'next/image'
function Error() {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <Image src={web404.src} alt="404" width={100} height={100} className='w-[200px]' />
                    <p className='text-center text-slate-700 italic'>Page Not Found</p>
                </div>

            </div>
        </>
    )
}

export default Error