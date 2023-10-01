import React, { useEffect, useRef, useState } from 'react'
import Loading from './Loading';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import CommentForm from './CommentForm';

function Comment({ params }: { params: string }) {
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [isFound, setFound] = useState(false)
    const router = useRouter()
    const fetch_data = async (slug: string) => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/comments/${slug}`, { next: { tags: ['comments'], revalidate: 500 } });
        const data_json = await data.json();
        if (data_json.code == 200) {
            setComments(data_json.data.data);
            setFound(true)
        } else {
            setComments([]);
            setFound(false)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetch_data(params)
    }, [router.query.slug, params])


    return (
        <div className='mt-2'>
            <div className="flex text-white items-center gap-2 bg-himaptika w-fit rounded p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>

                <h1 className="font-semibold text-xl">Tinggalkan Tanggapan</h1>
            </div>
            {
                isLoading ? <Loading /> : isFound ? (
                    comments.map((comment: any, key: number) => {
                        return (
                            <div key={key} className='my-3'>
                                <div className='rounded overflow-clip mt-3 shadow'>
                                    <div className='bg-himaptika text-white p-2 flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <p>{comment.name}</p>
                                            <p className='text-[10px]'>{comment.email}</p>
                                        </div>
                                        <div className='text-sm'>
                                            <p className='text-end'>
                                                {moment(comment.created_at).format('DD-MM-YYYY')}
                                            </p>
                                            <p className='text-end text-[10px]'>
                                                {moment(comment.created_at).format('HH:MM')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='bg-white p-2'>
                                        {comment.comment}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <>
                        <div className='text-slate-500 italic my-2 text-sm'>
                            Belum ada komentar
                        </div>
                    </>
                )
            }
            <CommentForm />
        </div>
    )
}

export default Comment