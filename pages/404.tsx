import React from 'react'
import Head from 'next/head'
import web404 from '@/public/404.svg'
function Error() {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <img src={web404.src} alt="404" className='w-[200px]' />
                    <p className='text-center text-slate-700 italic'>Page Not Found</p>
                </div>

            </div>
        </>
    )
}

export default Error