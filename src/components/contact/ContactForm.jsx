import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"
import axios from "axios"
import { TextArea, Input } from "../Form"


function ContactForm() {

    const [sending, setSending] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({
        name: Yup.string().required('ad soyad eksik'),
        // phone: Yup.string().min(10, "telefon geçerli değil").max(10, "telefon geçerli değil").matches(phoneRegExp, "telefon geçerli değil").required("telefon eksik"),
        phone: Yup.string().min(10, "telefon geçerli değil").max(11, "telefon geçerli değil").matches(phoneRegExp, "telefon geçerli değil").required("telefon eksik"),
        email: Yup.string().email("geçersiz e-mail adresi").required("email eksik"),
        subject: Yup.string().required('zorunlu alan')
    })
    const { handleChange, handleBlur, handleSubmit, values, isSubmitting, touched, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            subject: ""
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            setSending(false)
            setError(false)
            setLoading(true)
            try {
                await axios.get(`${process.env.REACT_APP_API_URL}/backend/mail/index.php?name=${values.name}&phone=${values.phone}&sendto=${values.email}&message=${values.subject}&template=contact`)
                    .then(response => {
                        setLoading(false)
                        setSending(true)
                        console.log('object :>> ', response.data)
                    })
            } catch (error) {
                setLoading(false)
                setError(error.message)
            }  finally {
                bag.resetForm()
            }
        }
    })
    const formData = [
        {
            element: Input,
            label: "ad soyad",
            type: "text",
            name: "name",
            value: values.name,
            touched: touched.name,
            errors: errors.name,
            required: true
        },
        {
            element: Input,
            label: "email adresi",
            type: "email",
            name: "email",
            value: values.email,
            touched: touched.email,
            errors: errors.email,
            required: true
        },
        {
            element: Input,
            label: "telefon numarası",
            type: "text",
            name: "phone",
            value: values.phone,
            touched: touched.phone,
            errors: errors.phone,
            required: true,
            // description: "'0' olmadan (xxx)-xxx-xx-xx şeklinde giriniz."
        },
        {
            element: TextArea,
            label: "konu",
            rows: 10,
            name: "subject",
            value: values.subject,
            touched: touched.subject,
            errors: errors.subject,
            required: true
        }
    ]

    return (
        <form onSubmit={handleSubmit} className="grid gap-y-3 relative">
            <h2 className="font-arista text-xl text-center">iletişim formu</h2>
            {formData.map((input, i) => (
                <input.element key={i}
                    label={input.label}
                    type={input.type}
                    name={input.name}
                    value={input.value}
                    touched={input.touched}
                    errors={input.errors}
                    required={input.required}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    description={input?.description}
                    data={input?.data}
                    rows={input.rows}
                />
            ))}
            <button type="submit" className="btn-primary text-xs w-full disabled:bg-zinc-400" disabled={isSubmitting}>FORMU GÖNDER</button>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium w-full">
                {loading &&
                    <div className="bg-yellow-400 rounded-xl px-5 py-1 text-center w-full text-white"> gönderiliyor...</div>
                }
                {sending &&
                    <div className="bg-lime-500 rounded-xl px-5 py-1 text-center w-full text-white"> gönderildi...</div>
                }
                {error &&
                    <div className="bg-red-400 rounded-xl px-5 py-1 text-center w-full text-white"> hata: {error}</div>
                }
            </div>
        </form>
    )
}

export default ContactForm