import { useState } from "react";
import logokoni from '../assets/logokoni.png'
import { FaSignInAlt, FaArrowLeft } from 'react-icons/fa';

export default function Header() {
    const [isMainPage, setIsMainPage] = useState(false);

    return (
        <header className="flex justify-between items-center bg-primary p-4">
            <div className="flex items-center gap-2">
                <img src={logokoni} alt="Logo" className="h-10" />
                <h1 className="text-2xl font-bold">KONI KOTA MAKASSAR</h1>
            </div>
            <div>
                {!isMainPage ? (
                    /* Tampilan Saat Berada di Halaman Login / Awalan */
                    <button
                        onClick={() => setIsMainPage(true)}
                        className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition-colors"
                    >
                        Masuk ke Halaman Utama
                    </button>
                ) : (
                    /* Tampilan Navbar Lengkap Saat Sudah Masuk ke Halaman Utama */
                    <nav className="flex items-center gap-6">
                        <ul className="flex items-center gap-4 text-black font-semibold">
                            <li><a href="#beranda" className="hover:underline">BERANDA</a></li>
                            <li><a href="#pengurus" className="hover:underline">PENGURUS</a></li>
                            <li><a href="#bidang" className="hover:underline">BIDANG</a></li>
                            <li><a href="#cabor" className="hover:underline">CABOR</a></li>
                            <li><a href="#galeri" className="hover:underline">GALERI</a></li>
                            <li><a href="#berita" className="hover:underline">BERITA</a></li>
                        </ul>

                        <div className="flex items-center gap-2 border-l border-black/20 pl-4">
                            {/* Tombol Login */}
                            <button className=" flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-1.5 rounded border border-gray-300 transition-colors">
                                <FaSignInAlt />
                                Login
                            </button>

                            {/* Tombol untuk Kembali ke Mode Login (Opsional) */}
                            <button
                                onClick={() => setIsMainPage(false)}
                                className="flex items-center gap-2 bg-red-500 text-white hover:bg-red-600  font-medium px-2 py-1.5 rounded border border-red-300 transition-colors"
                            >
                                <FaArrowLeft className="w-3.5 h-3.5" />
                                Kembali 
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}