import { Link } from "react-router-dom"
import logo from "../assets/images/logo-transparan.png"
// import Social from "./Social"
import { brand, sellingAgreement, confidentiallyAgreement, lightningText } from "../utils/kolayplan"
import iyzico from "../assets/images/iyzico.svg"
import visa from "../assets/images/visa.png"
import mastercard from "../assets/images/mastercard.png"

const footerMask = "data:image/svg+xml;utf8,%3csvg viewBox='0 0 100 100' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3e%3cpath d='M0,0 C16.6666667,66 33.3333333,98 50,98 C66.6666667,98 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z' fill='%23fff'/%3e%3c/svg%3e"

function Footer({ setModals }) {
  const payment = [iyzico, visa, mastercard]
  const useful = [
    {
      name: "gizlilik sözleşmesi",
      link: () => setModals(prev => [...prev, { name: "useful-modal", title: "gizlilik sözleşmesi", data: confidentiallyAgreement }])
    },
    {
      name: "|",
    },
    {
      name: "aydınlatma metni",
      link: () => setModals(prev => [...prev, { name: "useful-modal", title: "aydınlatma metni", data: lightningText }])
    },
    {
      name: "|",
    },
    {
      name: "mesafeli satış sözleşmesi",
      link: () => setModals(prev => [...prev, { name: "useful-modal", title: "mesafeli satış sözleşmesi", data: sellingAgreement }])
    },
  ]

  return (
    <div className='mt-auto relative'>
      <div style={{ WebkitMaskImage: `url("${footerMask}")`, maskImage: `url("${footerMask}")`, maskPosition: "center center" }} className="h-10 bg-zinc-800" />
      <div className='grid grid-cols-2 md:grid-cols-3 md:justify-between items-center text-white font-medium px-10 bg-zinc-800 -mt-0.5 py-2.5'>
        {/* <div><Social /></div> */}
        <div className="flex justify-center md:justify-start gap-3 col-span-2 md:col-span-1">
          {payment.map((image, key) => (
            <img key={key} src={image} alt="" className="h-6 w-18"/>
          ))}
        </div>
        <div className="flex flex-col gap-3 justify-center items-center order-3 md:order-2 col-span-2 md:col-span-1">
          <div className="text-sm font-medium font-arista text-center">{brand} <span className="font-serif">© {new Date().getFullYear()}</span> - tüm hakları saklıdır.</div>
          <ul className="flex text-xs font-extralight gap-3">
            {useful.map((item, i) => (
              <li key={i}>
                {item.link ?
                  <button onClick={item.link}>{item.name}</button>
                  :
                  item.name
                }
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center md:justify-end col-span-2 md:col-span-1 md:order-3 order-2">
          <div className="w-40 ">
            <Link to="/">
              <img src={logo} alt="" title="kolayplan" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer