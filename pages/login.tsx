import Head from 'next/head'
import React, { useEffect } from 'react'

function Login() {
    useEffect(() => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}`
    })
    return (
        <>
            <Head>
                <title>Redirecting...</title>
            </Head>
            Redirecting to admin page...
        </>
    )
}

export default Login