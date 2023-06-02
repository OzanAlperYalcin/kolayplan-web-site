import ContactForm from "./ContactForm"
import Title from "../Title"
function Contact({ title }) {
    return (
        <div className="grid gap-y-10">
            <Title title={title} />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-10">
                    <div className="grid justify-center items-center">
                        <div className="grid h-48 w-48 md:h-96 md:w-96 relative">
                            <div className="flex justify-center items-center h-48 w-48 md:h-96 md:w-96 bg-lime-500 rounded-full z-10">
                                <div className="text-white">
                                    <h1 className="font-arista text-center text-4xl md:text-7xl">kolayplan</h1>
                                    <div className="grid text-sm font-light text-center">
                                        <div className="flex md:flex-row flex-col md:justify-end md:-mt-3">
                                            <a href="mailto:info@kolayplan.net">info@kolayplan.net</a>
                                            {/* <p> 0546 545 28 09</p> */}
                                        </div>
                                        {/* <p>buraya adres yazalım, buraya adres yazalım </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bg-lime-500/20 h-full w-full rounded-full motion-safe:animate-pingSlow" />
                        </div>
                    </div>
                    <div className="grid px-10 lg:px-32">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact