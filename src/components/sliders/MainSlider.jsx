import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper"
import "swiper/css/navigation"
import "swiper/css"
import "./style.css"
import { images } from '../../utils/images'
// import kolayplan from "../../assets/kolayplan.mp4"

function MainSlider() {

    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true
                }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                className="h-screen bg-lime-500 rounded-b-full text-white"
            >
                {/* <SwiperSlide>
                    <div className="flex justify-center items-center max-w-4xl mx-auto h-full">
                        <video src={kolayplan} type="video/mp4" autoPlay loop></video>
                    </div>
                </SwiperSlide> */}
                {images.slides.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className='flex justify-center items-center h-full'>
                            <img src={item} alt="" className='w-full sm:w-1/2' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div ref={(node) => setPrevEl(node)} className="absolute top-1/2 left-0 -translate-y-1/2 z-20">prev</div>
            <div ref={(node) => setNextEl(node)} onClick={nextEl} className="absolute top-1/2 right-0 -translate-y-1/2 z-20">next</div> */}
        </div>
    )
}

export default MainSlider