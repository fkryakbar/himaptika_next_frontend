import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then(r => r.json())
function RandomPost() {
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/random-posts`, fetcher);
    return (
        <>
            <div className='text-himaptika'>
                {
                    isLoading ? <Loading /> : data.data.map((post: any) => {
                        return (
                            <Link href={`/blog/${post.slug}`} key={post.id} className='my-4 block text-slate-700'>
                                <div className='text-xl font-semibold '>
                                    {post.title}
                                </div>
                                <div className='text-sm'>
                                    {post.description}
                                </div>
                                <hr className='mt-2' />
                            </Link >
                        )
                    })
                }
            </div>
        </>
    )
}

export default RandomPost