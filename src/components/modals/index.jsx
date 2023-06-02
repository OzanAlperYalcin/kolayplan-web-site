import { modalsData } from "./modalsData"
import { AiFillCloseCircle } from "react-icons/ai"

function Modals({ setModals, modals }) {
    return (
        <div
            className='z-50 fixed inset-0 h-full w-full bg-black/40 flex justify-center items-center'
            onClick={() => setModals([])}
        >
            {modals.map((item, i) => {
                const modal = modalsData.find(f => f.name === item.name)
                return (
                    <div key={i} className='bg-zinc-100 w-3/4 rounded-xl shadow-lg'>
                        <div className="flex items-center justify-between py-2.5 px-5 border-b-2 border-zinc-300 text-lg font-arista">
                            <p>{item.title}</p>
                            <div className="hover:bg-lime-500/20 hover:rotate-180 text-red-500 transition-all duration-300 cursor-pointer rounded-full p-1"><AiFillCloseCircle /></div>
                        </div>
                        <modal.element data={item.data}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Modals