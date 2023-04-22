import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Head from "next/head"
import Himaptika from '../public/Himaptika.png'
import Footer from "@/components/Footer"
export default function Home() {
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
      <section className="min-h-screen">

      </section>
      <Footer />

    </>
  )
}
