import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import moment from "moment";
import svgError from '@/public/404.svg'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"


export async function getStaticPaths() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/slug?paginate=10`);
    const page_data = await data.json();
    let page: Array<string | { params: { [key: string]: string } }> = []

    for (let i = 1; i <= page_data.data.last_page; i++) {
        let object = {
            params: { page: i.toString() }
        }
        page.push(object)
    }
    return { paths: page, fallback: false }

}
export async function getStaticProps(context: any) {
    moment.locale('id_ID')
    const page = context.params.page

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/slug?paginate=10&page=${page}`)
    let data = await res.json();
    if (data.data.length == 0) {
        return {
            props: { posts: { code: 404, message: 'Not Found' } },
            revalidate: 10
        }
    } else {
        data.data.data.map((post: any) => {
            post.created_at = moment(post.created_at).fromNow();
        })
        return {
            props: { posts: data },
            revalidate: 10
        }

    }

}

export default function Page({ posts }: any) {
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
                    <div className="rounded-lg lg:drop-shadow-md bg-white min-h-screen lg:p-4 p-3 flex lg:flex-row flex-col gap-5">
                        <div className="basis-[70%]">
                            <div className="flex justify-between items-center">
                                {
                                    posts.code == 200 ? (
                                        <>
                                            <div className="flex items-center gap-2 bg-himaptika w-fit rounded p-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                </svg>
                                                <h1 className="font-semibold text-xl">Berita Terkini</h1>
                                            </div>
                                            {/* <div className="text-slate-500 text-sm">
                                                Page {posts.data.current_page} of {posts.data.last_page}
                                            </div> */}
                                        </>
                                    ) : null
                                }
                            </div>
                            <div className="mt-6 text-himaptika">
                                {posts.code == 200 ? posts.data.data.map((post: any) => {
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
                                                                Published : {post.created_at}
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
                                    posts.code == 200 ? (
                                        <div className="flex justify-center">
                                            <nav aria-label="Page navigation example">
                                                <ul className="list-style-none flex">
                                                    <li>
                                                        <Link
                                                            className={`${posts.data.current_page - 1 == 0 ? 'pointer-events-none' : ''} relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 `}
                                                            href={{ pathname: '/blog/page/[page]', query: { page: posts.data.current_page - 1 == 0 ? 1 : posts.data.current_page - 1 } }} >Previous</Link>
                                                    </li>
                                                    {posts.data.links.map((link: any, key: number) => {
                                                        if (key != 0 && key != posts.data.links.length - 1)
                                                            return (
                                                                <li key={key}>
                                                                    <Link href={{ pathname: '/blog/page/[page]', query: { page: link.label } }}
                                                                        className={`${link.label == posts.data.current_page ? 'text-himaptika' : 'text-neutral-500'} relative block rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300 `}
                                                                    >{link.label}</Link>
                                                                </li>
                                                            )
                                                    })
                                                    }
                                                    <li>
                                                        <Link
                                                            className={`${posts.data.current_page + 1 > posts.data.last_page ? 'pointer-events-none' : ''} relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 `}
                                                            href={{ pathname: '/blog/page/[page]', query: { page: posts.data.current_page + 1 > posts.data.last_page ? posts.data.last_page : posts.data.current_page + 1 } }} >Next</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    ) : null
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
