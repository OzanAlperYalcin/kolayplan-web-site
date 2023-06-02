import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from "swiper"
import { featureSlider } from '../../utils/features'
import "swiper/css/pagination"
import "swiper/css"
import "./style.css"

import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-router-dom'

function FeatureSlider() {

    return (
        <div>
            <Swiper
                pagination={{
                    el: '.swiper-pagination-custom',
                    dynamicBullets: false,
                    clickable: true
                }}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                // centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                className="px-1 my-2.5"
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    770: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }}
            >
                {featureSlider.map((feature, i) => (
                    <SwiperSlide key={i} className="h-[300px]">
                        <Link to={feature.link} className='shadow rounded-3xl border border-zinc-300 relative grid bg-white p-5 h-72 group z-10 cursor-pointer overflow-hidden'>
                            <div className={`absolute -z-10 top-0 left-0 bg-no-repeat bg-contain bg-center h-full w-full`} style={{ backgroundImage: `url(${feature.imageURL})` }} />
                            <div className='absolute -z-10 bg-lime-500/80 w-full top-[400px]  group-hover:top-1/2 -translate-y-1/2 group-hover:transition-all group-hover:duration-[1000ms] ease-in-out'>
                                <p className='text-white p-3 text-sm font-medium'>{feature.shorter}</p>
                            </div>
                            <div className='text-lime-500 font-arista text-center text-lg'>{feature.title}</div>
                            <div className='mt-auto text-lime-500/50 group-hover:text-lime-500 group-hover:translate-x-5 transition-all duration-500'>
                                <BsArrowRight size={24} />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination-custom flex justify-center" />
        </div >
    )
}

export default FeatureSlider