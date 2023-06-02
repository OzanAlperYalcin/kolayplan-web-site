import ContactButton from "../components/ContactButton"
import PriceTable from "../components/PriceTable"

function Prices() {
    return (
        <div className='grid gap-20 mt-20'>
            <PriceTable title={"fiyatlarımız"} />
            <ContactButton />
        </div>
    )
}

export default Prices