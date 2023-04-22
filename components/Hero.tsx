import React, { ReactNode, ReactPortal } from 'react'

type Props = {
    children?: ReactNode
}
function Hero({ children }: Props) {
    return (
        <>
            <div className='p-2 bg-himaptika'>
                <div className=' lg:w-[80%] mx-auto'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Hero