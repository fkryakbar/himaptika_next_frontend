import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import svgError from '@/public/404.svg'
import useSWR from "swr"
const fetcher = (url: string) => fetch(url).then(r => r.json())
function dateConvert(date: string) {
    const dt = new Date(date);
    return dt.toLocaleString("en-EN", { day: 'numeric', month: 'short', year: 'numeric', minute: 'numeric', hour: 'numeric' })
}
export default function Search() {
    const router = useRouter()
    let page = 1;
    if (router.query.page) {
        page = parseInt(router.query.page[0]);
    }

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts?search=${router.query.key}&page=${page}`, fetcher);
    return (
        <>
            <Head>
                <title>
                    Informasi Terkini HIMAPTIKA FKIP ULM
                </title>
            </Head>
            <Navbar />
            <Hero>
                <div className="pb-5 pt-10 ">
                    <div className="flex justify-between items-center text-white">
                        <div>
                            <h1 className="text-5xl  font-bold drop-shadow-[-3px_3px_0px_rgb(255,111,0)]">Informasi</h1>
                            <h1 className="font-semibold lg:text-base text-sm mt-3">Berita terkini yang ada di HIMAPTIKA FKIP ULM</h1>
                        </div>
                        <div className="lg:block hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-2w-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>

                        </div>
                    </div>
                </div>
            </Hero>
            <section className="min-h-screen text-white mt-4">
                <div className="lg:w-[80%] mx-auto lg:p-3">
                    <div className="rounded-lg lg:shadow-md bg-white min-h-screen lg:p-4 p-3 flex lg:flex-row flex-col gap-5">
                        <div className="basis-[70%]">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 bg-himaptika w-fit rounded p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                    <h1 className="font-semibold text-xl">Cari : {router.query.key}</h1>
                                </div>
                                {
                                    isLoading ? (<>
                                        <div className="animate-pulse bg-gray-200 h-5 rounded-full w-20 my-1"></div>

                                    </>) : (
                                        <>
                                            <div className="text-slate-500 text-sm">
                                                Total hasil {data.data.total ? (<>{data.data.total}</>) : (<>0</>)}
                                            </div>
                                        </>
                                    )
                                }

                            </div>
                            <div className="mt-6 text-himaptika">
                                {
                                    isLoading ? (<>
                                        <div className="flex gap-2 my-2">
                                            <div className="basis-[30%] rounded-xl bg-gray-200 animate-pulse"></div>
                                            <div className="basis-[70%]">
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-full my-1"></div>
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-1/4 my-1"></div>
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-1/2 my-1"></div>
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-full my-1"></div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 my-2">
                                            <div className="basis-[30%] rounded-xl bg-gray-200 animate-pulse"></div>
                                            <div className="basis-[70%]">
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-full my-1"></div>
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-1/4 my-1"></div>
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-1/2 my-1"></div>
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-full my-1"></div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 my-2">
                                            <div className="basis-[30%] rounded-xl bg-gray-200 animate-pulse"></div>
                                            <div className="basis-[70%]">
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-full my-1"></div>
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-1/4 my-1"></div>
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-1/2 my-1"></div>
                                                <div className="animate-pulse bg-gray-200 h-5 rounded-full w-full my-1"></div>
                                            </div>
                                        </div>
                                    </>) : (<>
                                        {data.code == 200 ? data.data.data.map((post: any) => {
                                            return (
                                                <Link href={`/blog/${post.slug}`} key={post.id}>
                                                    <div className="my-3">
                                                        <div className="flex lg:flex-row flex-col gap-3 items-center text-slate-700">
                                                            <div className="basis-[20%] w-full">
                                                                <Image className="w-[100%]" width={300} height={300} src={post.image_path} alt="Thumb" />
                                                            </div>
                                                            <div className="basis-[80%]">
                                                                <h1 className="text-xl font-semibold">
                                                                    {post.title}
                                                                </h1>
                                                                <p className="mt-3">
                                                                    {post.description}
                                                                </p>
                                                                <div className="flex gap-3 mt-3 text-[10px]">
                                                                    <div className="bg-himaptika py-1 px-2 rounded-md text-white font-semibold">
                                                                        Published : {dateConvert(post.created_at)}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-4" />
                                                    </div>
                                                </Link>
                                            )
                                        }) : (
                                            <div className=''>
                                                <Image width={300} height={300} src={svgError.src} alt="err" className='w-[200px] mx-auto' />
                                                <p className='text-slate-700 font-semibold text-center mt-3'>
                                                    Blog tidak ditemukan
                                                </p>
                                            </div>
                                        )}
                                        {
                                            data.code == 200 ? (
                                                <div className="flex justify-center">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="list-style-none flex">
                                                            <li>
                                                                <Link
                                                                    className={`${data.data.current_page - 1 == 0 ? 'pointer-events-none' : ''} relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 `}
                                                                    href={{ pathname: `/blog/search/${router.query.key}`, query: { page: data.data.current_page - 1 == 0 ? 1 : data.data.current_page - 1 } }} >Previous</Link>
                                                            </li>
                                                            {data.data.links.map((link: any, key: number) => {
                                                                if (key != 0 && key != data.data.links.length - 1)
                                                                    return (
                                                                        <li key={key}>
                                                                            <Link href={{ pathname: `/blog/search/${router.query.key}`, query: { page: link.label } }}
                                                                                className={`${link.label == data.data.current_page ? 'text-himaptika' : 'text-neutral-500'} relative block rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300 `}
                                                                            >{link.label}</Link>
                                                                        </li>
                                                                    )
                                                            })
                                                            }
                                                            <li>
                                                                <Link
                                                                    className={`${data.data.current_page + 1 > data.data.last_page ? 'pointer-events-none' : ''} relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 `}
                                                                    href={{ pathname: `/blog/search/${router.query.key}`, query: { page: data.data.current_page + 1 > data.data.last_page ? data.data.last_page : data.data.current_page + 1 } }} >Next</Link>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            ) : null
                                        }


                                    </>)
                                }
                            </div>

                        </div>
                        <div className="basis-[30%]">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}