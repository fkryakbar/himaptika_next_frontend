import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Head from "next/head"
import Himaptika from '../public/Himaptika.png'
import Footer from "@/components/Footer"
import DumpImage from '../public/twUyWX4PeHeQQhH9Z63v8zKZ5okK1lc1792EXuMy.jpg'
import Link from "next/link"

interface Response {
  code: number,
  data: Array<any>,
  message: string
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/v1/posts?limit=3`)
  const data = await res.json()
  return {
    props: { posts: data }
  }
}

export default function Home({ posts }: { posts: Response }) {
  return (
    <>
      <Head>
        <title>
          Himpunan Mahasiswa Pendidikan Matematika FKIP ULM
        </title>
      </Head>
      <Navbar />
      <Hero>
        <div className="pb-5 pt-10 ">
          <img src={Himaptika.src} alt="Main Logo" className="w-[150px] mx-auto" />
          <div className="text-white text-center mt-3">
            <h1 className="text-5xl  font-bold drop-shadow-[-3px_3px_0px_rgb(255,111,0)]">HIMAPTIKA</h1>
            <h1 className="font-semibold lg:text-base text-sm mt-3">FAKULTAS KEGURUAN DAN ILMU PENDIDIKAN</h1>
            <h1 className="font-semibold lg:text-base text-sm">UNIVERSITAS LAMBUNG MANGKURAT</h1>
          </div>
        </div>
      </Hero>
      <section className="min-h-screen text-white mt-4">
        <div className="lg:w-[80%] mx-auto p-3">
          <div className="flex justify-between items-center">
            <h1 className="bg-himaptika inline-block rounded-md p-2 font-semibold lg:text-2xl">
              INFO TERBARU
            </h1>
            <div className="text-himaptika">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:h-16 h-14 lg:w-16 w-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
          </div>
          <div className="mt-3 text-himaptika">
            <div className="flex flex-col lg:flex-row gap-4">
              {
                posts.data.map((post: any, index: number) => {
                  return (<Link key={post.id} href={`/blog/${post.slug}`}>
                    <div className="rounded-xl drop-shadow overflow-clip bg-white pb-1">
                      <img src={`${post.image_path}`} alt="dump" className="basis-[30%]" />
                      <div className="my-5 text-himaptika mx-3">
                        <h1 className="font-semibold text-xl">
                          {post.title}
                        </h1>
                        <p className="mt-2">
                          {post.description}
                        </p>
                        <div className="flex justify-end my-3">
                          <button className="btn bg-himaptika hover:bg-red-800 border-0">Selengkapnya</button>
                        </div>
                      </div>
                    </div>
                  </Link>)

                })
              }

            </div>
            <div className="my-3">
              <Link href="/blog">Selengkapnya...</Link>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="bg-himaptika inline-block rounded-md p-2 font-semibold lg:text-2xl text-white">
                STRUKTUR ORGANISASI
              </h1>
              <div className="text-himaptika">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:h-16 h-14 lg:w-16 w-14">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>

              </div>
            </div>
            <div className="drop-shadow-md bg-white rounded-md overflow-clip mt-2">
              <div className="bg-himaptika text-white p-2  font-semibold flex justify-between items-center">
                <h1>
                  Kenali Kami
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-2">
                <h1 className="text-lg">
                  Struktur Organisasi HIMAPTIKA FKIP ULM Periode 2023-2024
                </h1>
                <p className="text-sm my-2">Klik selengkapnya untuk mengetahui struktur Organisasi HIMAPTIKA FKIP ULM</p>
                <Link href="/blog/susunan-kepengurusan-himaptika-fkip-ulm-20222023" className="text-sm">Selengkapnya...</Link>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <h1 className="bg-himaptika inline-block rounded-md p-2 font-semibold lg:text-2xl text-white">
                IKAHIMATIKA
              </h1>
              <div className="text-himaptika">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:h-16 h-14 lg:w-16 w-14">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
            </div>
            <div className="drop-shadow-md bg-white rounded-md overflow-clip mt-2 mb-5">
              <div className="bg-himaptika text-white p-2  font-semibold flex justify-between items-center">
                <h1>
                  IKAHIMATIKA
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-2">
                <h1 className="text-lg">
                  Apa itu IKAHIMATIKA?
                </h1>
                <p className="text-sm my-2">Klik selengkapnya untuk mengetahui apa itu IKAHIMATIKA</p>
                <Link href="/blog/apa-itu-ikahimatika" className="text-sm">Selengkapnya...</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}
