import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
function RandomPost() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const router = useRouter()
    const fetch_data = async () => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/random-posts`);
        const response = await data.json();
        setPosts(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetch_data()
    }, [router.query.slug])
    return (
        <>
            <div className='text-himaptika'>
                {
                    isLoading ? <Loading /> : posts.map((post: any) => {
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