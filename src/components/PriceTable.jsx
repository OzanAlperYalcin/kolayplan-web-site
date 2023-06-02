import { FaCheck, FaQuestionCircle, FaStar } from "react-icons/fa"
import { pricingTable } from "../utils/pricing"
import Title from "./Title"
function PriceTable({ title }) {
    return (
        <div className="flex flex-col gap-y-10 relative">
            <div className="absolute h-96 w-96 bg-lime-500/20 rounded-full -bottom-10 left-0" />
            <div className="absolute h-96 w-96 bg-lime-500/20 rounded-full -top-10 right-0" />
            <Title title={title} />
            <div className="flex flex-wrap gap-5 justify-center">
                {pricingTable.map((items, i) => (
                    <div key={i} className="flex flex-col h-full w-72 hover:scale-105 transition-all duration-300">
                        <div className="bg-lime-500 text-center text-white p-8 rounded-t-xl relative overflow-hidden">
                            <h1 className="text-lg">{items.title}</h1>
                            <h5 className="text-xs font-light">{items.description}</h5>
                            {items.tag.active &&
                                <div className="absolute transform rotate-45 text-center text-white text-xs font-semibold py-1 right-[-50px] top-[23px] w-[170px] bg-rose-500">
                                    <div className="flex justify-center items-center gap-1">
                                        <FaStar size={10} className="text-yellow-300" />
                                        {items.tag.label}
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="bg-zinc-50 flex flex-col py-8 border border-t-none rounded-b-xl shadow-lg border-zinc-300 h-[460px] relative overflow-hidden">
                            <ul className="grid gap-3 px-5">
                                {items.features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-5">
                                        <FaCheck className="flex-shrink-0 text-lime-500" />
                                        <p className={`w-full text-sm font-light ${item.style ? item.style : ""}`}>
                                            {item.name}
                                        </p>
                                        {item.hover &&
                                            <div className="relative group">
                                                <FaQuestionCircle className="text-zinc-400 group-hover:text-lime-500" />
                                                <div className="absolute bottom-0 right-0 bg-white/90 border border-zinc-300 opacity-0 scale-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300 rounded-xl w-52">
                                                    <p className="text-[10px] font-light p-2.5">{item.description}</p>
                                                </div>
                                            </div>
                                        }
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto flex justify-center gap-1">
                                <span className="mb-auto text-sm">₺</span>
                                <span className="text-3xl font-medium">{items.price}</span>
                                <span className="mt-auto text-sm">/ AYLIK</span>
                            </div>
                            <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 h-32 w-32 bg-lime-500 rounded-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PriceTable