import { useState } from 'react';
import bgkoni from '../assets/bgkoni.jpg';
import aboutkoni from '../assets/aboutkoni.jpg';

export default function HomePage() {

    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <section className="relative w-full min-h-[calc(100vh-8rem)] overflow-hidden">
            <img
                src={bgkoni}
                alt="KONI Logo"
                className="block h-full w-full object-cover object-center"
            />

            <div className="w-full flex items-center justify-center text-white p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl w-full p-6 rounded-xl shadow-lg mt-10">

                    <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-3">
                        <h2 className="text-2xl font-bold text-black">Tentang <span className="text-red-500">KONI Kota Makassar</span></h2>
                        <p className="text-black leading-relaxed">
                            Komite Olahraga Nasional Indonesia (KONI) Kota Makassar bertugas mengelola, membina, dan mengembangkan kegiatan olahraga prestasi di Kota Makassar.
                        </p>
                        {showMore && (
                            <p className="text-black leading-relaxed">Komite Olahraga Nasional Indonesia (KONI) Kota Makassar adalah sebuah organisasi yang punya peran aktif dan bertanggung jawab mengelola, membina dan mengembangkan olahraga prestasi, juga bertindak sebagai lembaga otoritas keolahragaan yang mengkoordinasikan setiap kegiatan cabang olahraga, terkhusus event-even olahraga baik di tingkat kota, provinsi, nasional dan internasional, serta berkoordinasi dengan induk cabang olahraga tujuannya adalah meningkatkan prestasi olahraga atlit-atlit kota makassar, membangun karakter dan disiplin atlit, mempererat persatuan dan kesatuan melalui olahraga sesuai amanat UUD sistem keolahragaan nasional.

                            Ketua KONI Kota Makassar pertama periode 2006-2010 H Ilham Arief Sirajuddin, Berikutnya periode 2010-2014 KONI Kota Makassar dipimpin Abdul Latief Yusuf, Kemudian digantikan oleh Agar Jaya dua periode yakni 2014-2018 dan periode 2018-2022. Selanjutnya periode 2022 – 2026 Ahmad Susanto DB, 2025 -2029 Berdasarkan hasil Musyorkotlub menetapkan Ismail,SH sebagai Ketua Koni Kota Makassar dengan mengusung gagasan HARUMKAN OLAHRAGA MAKASSAR</p>
                        )}

                        <button onClick={toggleShowMore}
                            className="mt-3 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors shadow-md cursor-pointer text-sm"
                        >
                            {showMore ? 'Sembunyikan' : 'Selengkapnya'}</button>
                    </div>

                    {/* 2. Bagian Gambar (50% Lebar pada Layar Desktop) */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={aboutkoni}
                            alt="About KONI Makassar"
                            className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>

                </div>
            </div>
            {/* Nanti seksi Berita, Cabor, Galeri, dll. dipasang di sini */}
        </section>
    );
}