import ContactButton from "../components/ContactButton"
import Title from "../components/Title"
import { featureSlider, featureTitle } from "../utils/features"

function FeaturesPage() {
  return (
    <div className='mt-20 grid gap-20'>
      <div className='container mx-auto px-5 sm:px-0'>
        <Title title={featureTitle} />
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
          {/* <div className='bg-white rounded-xl border border-zinc-300 shadow relative z-10'> */}
          {featureSlider.map((item, i) => (
            <div key={i} className="hover:scale-105 transition-all duration-300">
              <div className={`bg-no-repeat bg-contain bg-center h-96 w-full`} style={{ backgroundImage: `url(${item.imageURL})` }} />
              <div className='flex flex-col gap-2.5 text-sm font-light'>
                <h1 className="text-center font-arista text-lime-500 text-3xl md:text-4xl whitespace-nowrap" >{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactButton />
    </div>
  )
}

export default FeaturesPage