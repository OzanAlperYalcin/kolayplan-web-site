import { program } from "../../utils/about"
import Title from "../Title"

function AboutInfo() {
    return (
        <div className='bg-lime-500 overflow-hidden grid grid-flow-row md:grid-flow-col justify-evenly items-center px-5 pt-10 pb-24 md:py-14 gap-5'>
            {/* <div className='absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-36 bg-zinc-50 rounded-full'></div> */}
            {program.map((item, i) => (
                    <div key={i} className="w-full md:96 text-center flex flex-col items-center gap-5 font-medium text-white bg-white/10 rounded-xl p-5 h-full group">
                        <Title title={item.title} color={"text-white"} />
                        <div className="relative text-center z-10">
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45 group-hover:rotate-90 transition-all duration-300 bg-white/50 rounded-xl h-16 w-16 -z-10"/>
                            <div><item.icon size={60} className="p-2.5"/></div>
                        </div>
                        <p className='text-sm'>{item.description}</p>
                    </div>
            ))}
        </div>
    )
}

export default AboutInfo