import Index from "./pages"
import Home from "./pages/Home"
import ContactPage from "./pages/ContactPage"
import Prices from "./pages/Prices"
import FeaturesPage from "./pages/FeaturesPage"
import CustomerForm from "./pages/CustomerForm"

const routes = [
    {
        path: "/",
        element: <Index />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "iletisim",
                element: <ContactPage />,
            },
            {
                path: "fiyatlarimiz",
                element: <Prices />,
            },
            {
                path: "ozellikler",
                element: <FeaturesPage />,
            },
            {
                path: "kurulum",
                element: <CustomerForm />,
            },
        ]
    },
]

export default routes