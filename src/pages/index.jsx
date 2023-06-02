import Header from '../components/Header'
import Footer from '../components/Footer'
import Modals from '../components/modals'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from "react"
import Whatsapp from '../components/Whatsapp'

function Index() {

    const [scroll, setScroll] = useState(0)
    const [modals, setModals] = useState([])
    const [sidebar, setSidebar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll])

    useEffect(() => {
        if (modals.length > 0) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
    }, [modals])
    return (
        <div className='bg-zinc-50 flex flex-col gap-y-10 h-screen relative'>
            {modals.length > 0 && <Modals setModals={setModals} modals={modals} />}
            <Header scroll={scroll} sidebar={sidebar} setSidebar={setSidebar} />
            <Outlet />
            <Footer setModals={setModals} />
            <Whatsapp scroll={scroll} />
        </div>
    )
}

export default Index