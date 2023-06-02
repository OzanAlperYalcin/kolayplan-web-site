import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper"
import { testimonials } from '../../utils/testimonials'
import "swiper/css/navigation"
import "swiper/css"
import "./style.css"
import { images } from '../../utils/images'

function TestimonialSlider() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={true}
                spaceBetween={50}
                // slidesPerView={3}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    }
                }}
                className="px-12 h-full text-white"
            >
                {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                    <div className='flex flex-col gap-3 items-center h-full'>
                        <div className='overflow-hidden bg-white rounded-full relative h-16 w-16'>
                            <div className='absolute left-1/2 -translate-x-1/2 bottom-0 bg-contain bg-center h-14 w-14' style={{backgroundImage: `url(${images.testimonials[i]})`}}/>
                        </div>
                        <h1 className='text-xl font-arista'>{item.name}</h1>
                        <p className='text-sm font-light'>{item.comment}</p>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            {/* <div ref={(node) => setPrevEl(node)} className="absolute top-1/2 left-0 -translate-y-1/2 z-20">prev</div>
            <div ref={(node) => setNextEl(node)} onClick={nextEl} className="absolute top-1/2 right-0 -translate-y-1/2 z-20">next</div> */}
        </div >
    )
}

export default TestimonialSlider