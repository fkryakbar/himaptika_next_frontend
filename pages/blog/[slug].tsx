import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import moment from 'moment'
import Head from "next/head"
import Link from 'next/link'
import React, { useEffect } from 'react'
import svgError from '@/public/404.svg'
import Comment from '@/components/Comment'
import axios from 'axios'
import Image from 'next/image'
export async function getServerSideProps(context: any) {
    const slug = context.params.slug
    const data = await fetch(`${process.env.API_URL}/api/v1/read-post/${slug}`)
    const json = await data.json()
    update_views(slug)
    json.data.created_at = moment(json.data.created_at).locale('id').format('dddd, MMMM YYYY - HH:mm');
    json.data.updated_at = moment(json.data.updated_at).locale('id').format('dddd, MMMM YYYY - HH:mm');
    return {
        props: {
            data: json,
            post_slug: slug
        }
    }
}
const update_views = async (post_slug: string) => {
    const { data } = await axios.post(`https://himaptika-api.ninepmx.my.id/api/v1/views/${post_slug}`, { number: 1 });
}

function Read({ data, post_slug }: any) {
    let post = data.data
    return (
        <>
            <Head>
                <title>
                    {post.title}
                </title>
            </Head>
            <Navbar />
            <Hero>
                <div className="pb-5 pt-10 ">
                    <div className="flex justify-between items-center text-white gap-5">
                        <div>
                            <h1 className="lg:text-5xl text-3xl z-[0]  font-bold drop-shadow-[-3px_3px_0px_rgb(255,111,0)]">{data.code == 200 ? post.title : (<p>Blog tidak ditemukan</p>)}</h1>
                            <div className="font-semibold lg:text-base text-xs mt-3 flex items-center gap-3">
                                {
                                    data.code == 200 ? (<>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>
                                        Published : {post.created_at}
                                    </>) : null

                                }
                            </div>
                        </div>
                        <div className="lg:block hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-2w-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Hero>
            <section className="min-h-screen text-slate-700 mt-4">
                <div className="lg:w-[80%] mx-auto p-3">
                    <div className='rounded-lg lg:drop-shadow-md bg-white min-h-screen lg:p-4 p-3 flex lg:flex-row flex-col gap-5'>
                        <div className='basis-[70%]'>
                            <div className="text-sm breadcrumbs">
                                <ul>
                                    <li><Link href="/blog" >Blog</Link></li>
                                    <li>Informasi</li>
                                </ul>
                            </div>
                            {
                                data.code == 200 ? (
                                    <div>
                                        <h1 className='text-2xl font-semibold'>
                                            {post.title}
                                        </h1>
                                        <div className='flex lg:gap-3 items-center lg:text-xs text-[8px] text-green-600 mt-2 flex-wrap gap-2'>
                                            <div className='flex gap-1 items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-w-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                </svg>
                                                Published : {post.created_at}
                                            </div>
                                            <div className='flex gap-1 items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>

                                                Updated at : {post.updated_at}
                                            </div>
                                            <div className='flex gap-1 items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Dilihat {post.views} kali
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <Image width={300} height={300} src={post.image_path} alt="thumb" className='lg:w-[300px] w-[80%] mx-auto rounded' />
                                            <div className='mt-3' dangerouslySetInnerHTML={{ __html: post.content }}>

                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className=''>
                                        <Image width={300} height={300} src={svgError.src} alt="err" className='w-[200px] mx-auto' />
                                        <p className='text-slate-700 font-semibold text-center mt-3'>
                                            Blog tidak ditemukan
                                        </p>
                                    </div>
                                )
                            }
                            {
                                data.code == 200 ? (
                                    <Comment params={post_slug} />
                                ) : null
                            }
                        </div>
                        <div className='basis-[30%] text-white'>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Read