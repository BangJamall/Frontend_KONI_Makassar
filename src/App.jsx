import { Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SplashPage from './pages/SplashPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
    <Header/>
    <main className="flex-grow flex flex-col items-center justify-center p-6">
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    <Footer/>
    </>
  )
}

export default App
