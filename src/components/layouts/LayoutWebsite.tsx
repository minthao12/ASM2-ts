import { Outlet } from 'react-router-dom'
import Header from '../client/Header'
import Footer from '../client/Footer'
import Mainfooter from '../client/Mainfooter'

const LayoutWebsite = () => {
    return (
        <div className="font-sans scroll-smooth bg-gray-100">
            <Header />
            <main>
                <Outlet/>
                <Mainfooter />
            </main>
            <Footer/>
        </div>

    )
}

export default LayoutWebsite