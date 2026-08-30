import { Link } from 'react-router-dom';
import bghome from '../assets/bghome.png';

export default function SplashPage() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <img 
        src={bghome} 
        alt="KONI Logo" 
        className="w-full h-full object-cover block" 
      />
    </div>
  );
}