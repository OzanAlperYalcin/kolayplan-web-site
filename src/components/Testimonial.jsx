import TestimonialSlider from "./sliders/TestimonialSlider"
import mask from "../assets/images/section-mask.png"
import Title from "./Title"

function Testimonial({title}) {

    return (
        <div className="flex flex-col gap-y-10">
            <Title title={title} />
            <div style={{ WebkitMaskImage: `url(${mask})`, maskImage: `url(${mask})`, WebkitMaskPosition: "center center", WebkitMaskSize: "cover" }}>
                <div className='bg-lime-500'>
                    <div className='py-14 pb-20 text-white'>
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial