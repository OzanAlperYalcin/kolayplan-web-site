import { Animate } from '../components/animation'
import MainSlider from '../components/sliders/MainSlider'
import PriceTable from '../components/PriceTable'
import AboutInfo from '../components/home/AboutInfo'
import FeaturePreview from '../components/home/FeaturePreview'
import Testimonial from '../components/Testimonial'
import mask from "../assets/images/section-mask.png"
import Kolayplan from '../components/home/Kolayplan'
import Contact from '../components/contact/'
import FeatureSlider from '../components/sliders/FeatureSlider'

function Home() {
  return (
    <div className='flex flex-col gap-20'>
      <MainSlider />
      <section>
        <Animate.FadeUp>
          <Kolayplan />
        </Animate.FadeUp>
      </section>
      <section style={{ WebkitMaskImage: `url(${mask})`, maskImage: `url(${mask})`, WebkitMaskPosition: "center center", WebkitMaskSize: "cover" }}>
        <Animate.FadeUp>
          <AboutInfo />
        </Animate.FadeUp>
      </section>
      <section className='container mx-auto px-5 sm:px-0'>
        <Animate.FadeUp>
          <div className='flex flex-col gap-y-20'>
          <FeaturePreview />
          <FeatureSlider />
          </div>
        </Animate.FadeUp>
      </section>
      <section>
        <Animate.FadeUp>
          <PriceTable title={"fiyatlar"} />
        </Animate.FadeUp>
      </section>
      <section>
        <Animate.FadeUp>
          <Testimonial title={"diyetisyenler ne diyor?"} />
        </Animate.FadeUp>
      </section>
      <section>
        <Animate.FadeUp>
          <Contact title={"bizimle iletişime geçin"} />
        </Animate.FadeUp>
      </section>
    </div>
  )
}

export default Home