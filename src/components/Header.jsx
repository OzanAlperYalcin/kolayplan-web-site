import { Link } from "react-router-dom"
import logo from "../assets/images/logo-transparan.png"
import { menu } from "../utils/menu"
import { TiTimes, TiThMenu } from "react-icons/ti"
import Social from "./Social"
import { brand } from "../utils/kolayplan"

function Header({ scroll, sidebar, setSidebar }) {
    return (
        <header className={`${scroll > 0 ? "bg-lime-500/90" : "bg-lime-500"} fixed z-20 w-full text-sm text-white overflow-hidden transition-all duration-300`}>
            <div className='h-14 flex justify-between items-center container mx-auto px-1'>
                <div className="w-52">
                    <Link to="/">
                        {/* <img src={logo} alt="" title="kolayplan" /> */}
                        <div style={{ backgroundImage: `url(${logo})`, backgroundSize: "cover", backgroundPosition: "center center" }} className="h-14"></div>
                    </Link>
                </div>
                <div className="flex items-center lg:gap-x-10">
                    <ul className="flex gap-5">
                        {menu.map((m, i) => (
                            <li key={i} className="hover:text-lime-200 transition-colors duration-500 relative group font-arista text-base hidden lg:block">
                                <Link to={m.path}>
                                    <h1>{m.name}</h1>
                                </Link>
                                <div className="absolute bg-white -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-full transition-all duration-500"></div>
                            </li>
                        ))}
                    </ul>
                    <Social />
                </div>
                <button
                    onClick={() => setSidebar(prev => !prev)}
                    className="block p-1 lg:hidden hover:bg-white hover:rounded-full hover:text-lime-500 transition-all duration-500">
                    {!sidebar ?
                        <TiThMenu size={30} />
                        :
                        <TiTimes size={30} />
                    }
                </button>
            </div>
            <aside className={`sidebar ${!sidebar ? "" : "active"}`}>
                <div className="flex flex-col h-full mt-2.5 text-black font-arista text-xl">
                    <ul className="grid gap-2.5 list-disc list-outside w-full">
                        {menu.map((m, i) => (
                            <li key={i} className="text-center bg-lime-500/80 py-2.5 text-white">
                                <Link onClick={() => setSidebar(false)} to={m.path}>{m.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto pb-24 bg-zinc-800/80 w-full relative">
                        <p className="absolute top-1 left-1/2 -translate-x-1/2 text-white text-sm font-arista font-medium whitespace-nowrap">{brand} <span className="font-serif">© {new Date().getFullYear()}</span> - tüm hakları saklıdır.</p>
                    </div>
                </div>
            </aside>
        </header>
    )
}

export default Header