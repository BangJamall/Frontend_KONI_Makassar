import harumkan from '../assets/harumkan.png'
import logokoni from '../assets/logokoni.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <hr className="border-t border-slate-500 w-full mt-20" />
            <div className="flex flex-col items-center justify-center w-full h-24">

                <div className="flex items-center justify-center gap-4">
                    <img src={logokoni} alt="koni logo" className="h-10" />
                    <img src={harumkan} alt="dicoding logo" className="h-10" />
                </div>
                <div className="flex items-center justify-center gap-6 mt-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-700 transition-colors">
                        <FaEnvelope className="w-5 h-5" />
                        <span>makassarkoni@gmail.com</span>
                    </a>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-700 transition-colors"
                    >
                        <FaFacebook className="w-5 h-5" />
                        <span>Koni Kota Makassar</span>
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-700 transition-colors"
                    >
                        <FaInstagram className="w-5 h-5" />
                        <span>@koni_makassar</span>
                    </a>

                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-700 transition-colors"
                    >
                        <FaMapMarkerAlt className="w-5 h-5" />
                        <span>Jl. Kerung-Kerung ex. THR Kota Makassar</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}