import { useState } from "react";
import logokoni from '../assets/logokoni.png'
import { FaSignInAlt, FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isMainPage = location.pathname === '/home';

    return (
        <header className="flex justify-between items-center bg-primary p-4">
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logokoni} alt="Logo" className="h-10" />
                    <h1 className="text-2xl font-bold">KONI KOTA MAKASSAR</h1>
                </Link>
            </div>
            <div>
                {!isMainPage ? (
                    /* Tampilan Saat Berada di Halaman Login / Awalan */
                    <Link
                        to="/home"
                        className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition-colors shadow-sm inline-block"
                    >
                        Masuk ke Halaman Utama
                    </Link>
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
                            <button className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-1.5 rounded transition-colors shadow-sm">
                                <FaSignInAlt className="w-4 h-4" />
                                <span>Login</span>
                            </button>

                            {/* Tag Link Menggantikan Button untuk Kembali ke Splash Page (URL: "/") */}
                            <Link
                                to="/"
                                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1.5 rounded transition-colors shadow-sm"
                            >
                                <FaArrowLeft className="w-3.5 h-3.5" />
                                <span>Kembali</span>
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}