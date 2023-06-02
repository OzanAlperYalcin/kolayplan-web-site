import { featurePreview } from "../../utils/features"
import { Link } from "react-router-dom"
import Title from "../Title"
function FeaturePreview() {
    return (
        <div className="flex flex-col gap-y-5">
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center md:justify-between gap-y-5'>
                <div className='flex items-center justify-center h-full w-full'>
                    <div className="h-52 w-52 md:w-80 md:h-80 scale-150 bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url(${featurePreview.image})`}}></div>
                </div>
                <div className='text-center text-sm font-light grid gap-3 px-10 md:0 relative'>
                    <Title title={featurePreview.title} />
                    <figure className="absolute -top-16 w-full text-lime-500/20 -z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1109.8 797.1">
                            <path className="fill-current" opacity=".8" d="M105.1,267.1C35.5,331.5-3.5,423,0.3,517.7c5.8,145.3,110.7,314.2,588,273.1c753-64.7,481.3-358.3,440.4-398.3c-4-3.9-7.9-7.9-11.7-12L761.9,104.8C639.4-27.6,432.5-35.6,299.9,87L105.1,267.1z"></path>
                        </svg>
                    </figure>
                    <h2 className='text-xl font-arista'>{featurePreview.subtitle}</h2>
                    {featurePreview.description.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                    <Link to={featurePreview.button.link} className='btn-primary mx-auto'>{featurePreview.button.name}</Link >
                </div>
            </div>
        </div>
    )
}

export default FeaturePreview