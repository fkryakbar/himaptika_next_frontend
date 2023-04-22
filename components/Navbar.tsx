import Link from 'next/link'
import weblogo from '../public/Weblogo.png'
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className='bg-himaptika w-full p-2 text-sm drop-shadow-md'>
            <div className='lg:w-[80%] mx-auto lg:flex justify-between items-center'>
                <Link href="/" className='flex justify-between'>
                    <img src={weblogo.src} className='w-[150px]' alt="" />
                    <button onClick={e => { setOpen(!isOpen) }} className='btn bg-himaptika border-0 hover:bg-red-900  lg:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </button>
                </Link>
                <div className={`lg:flex lg:flex-row lg:my-0 flex-col gap-3 text-white flex ${isOpen ? 'h-[150px] my-2' : 'h-0 overflow-hidden'} lg:h-fit transition-all`}>
                    <div>
                        <Link href="/">Beranda</Link>
                    </div>
                    <div>
                        <Link href="/blog">Blog</Link>
                    </div>
                    <div>
                        <Link href="/sosial">Media Sosial</Link>
                    </div>
                    <div>
                        <Link href="https://drive.google.com/drive/folders/1v9QQYfMVERVHPPdUO_BnUpp8ihhs-ie6?usp=sharing" target='_blank'>Galeri</Link>
                    </div>
                    <div>
                        <div className="dropdown lg:dropdown-end">
                            <label tabIndex={0} className="hover:cursor-pointer">Tentang</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-slate-700">
                                <li><a className='pointer-events-none text-slate-300'>Sejarah</a></li>
                                <li><Link href="/">Struktur Organisasi</Link></li>
                                <li><Link href="/">Divisi-divisi</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
}
