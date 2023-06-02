// import { images } from "../../utils/images"np
import { kolayplan } from "../../utils/kolayplan"
import { Link } from "react-router-dom"
function Kolayplan() {

    return (
        <div className="relative">
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 items-center w-full'>
                    <div className='grid justify-center items-center gap-y-10'>
                        <h1 className='text-lime-500 font-arista text-3xl text-center'>{kolayplan.title}</h1>
                        <div className='text-sm font-light grid gap-3 px-10 md:px-0'>
                            <h2 className='text-xl font-arista'>{kolayplan.subtitle}</h2>
                            {kolayplan.description.map((item, i) => (
                                <p key={i}>{item}</p>
                            ))}
                        </div>
                        <div className="flex justify-end px-10">
                            <Link to={kolayplan.button.link} className='btn-primary text-sm flex justify-center items-center gap-2'>
                                <kolayplan.button.icon />
                                {kolayplan.button.name}
                            </Link>
                        </div>
                    </div>
                    <div className='relative z-10'>
                        {/* <div className="absolute bg-contain bg-center bg-no-repeat scale-150 h-52 w-52 md:w-80 md:h-80  left-1/2 -translate-x-1/2" style={{backgroundImage: `url(${images.schedules})`}}></div> */}
                        <div className="relative">
                            <iframe className="mx-auto rounded-xl w-[320px] h-[180px] md:w-[480px] md:h-[270px]" src="https://www.youtube.com/embed/jYQ8dyYkhQc?autoplay=1&controls=1&disablekb=1&loop=1&modestbranding=1&playsinline=1&color=white&mute=1" title="kolayplan tanıtım filmi" allowFullScreen></iframe>
                            {/* <div className="absolute top-0 left-0 w-full h-full"></div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bg-lime-500/10 rounded-full bottom-0 -left-32 h-96 w-96 shadow -z-10" />
        </div>
    )
}

export default Kolayplan