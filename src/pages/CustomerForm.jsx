import { useFormik } from "formik"
import * as Yup from "yup"
import { Input, TextArea } from "../components/Form"
import Title from "../components/Title"
import UploadImage from "../components/UploadImage"
import { useState } from "react"
import axios from "axios"

function CustomerForm() {
    
    const [sending, setSending] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({
        photoURL: Yup.mixed().test("fileSize", "logo 2.5MB boyunu geçmemeli!", value => value !== undefined && (value.size <= 2500000)).test('fileType', "desteklenmeyen logo uzantısı", value => {
            return value && (value.type === "image/jpeg" || value.type === "image/gif" || value.type === "image/png")
        }),
        name: Yup.string().required('ad soyad girmelisiniz'),
        working: Yup.string().required('çalışma saati girmelisiniz'),
        address: Yup.string().required('geçerli adres girmelisiniz'),
        email: Yup.string().required('geçerli email adresi girmelisiniz'),
        phone: Yup.string().min(10, "telefon geçerli değil").max(11, "telefon geçerli değil").matches(phoneRegExp, "telefon geçerli değil").required("telefon eksik"),
    })

    const { handleSubmit, handleBlur, handleChange, isSubmitting, values, errors, touched, setFieldValue } = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            address: "",
            photoURL: "",
            working: "",
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: "",
            youtube: "",
            tiktok: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            setSending(false)
            setError(false)
            setLoading(true)
            try {
                const formData = new FormData()
                formData.append("name", values.name)
                formData.append("phone", values.phone)
                formData.append("email", values.email)
                formData.append("working", values.working)
                formData.append("address", values.address)
                formData.append("facebook", values.facebook)
                formData.append("twitter", values.twitter)
                formData.append("instagram", values.instagram)
                formData.append("linkedin", values.linkedin)
                formData.append("tiktok", values.tiktok)
                formData.append("youtube", values.youtube)
                formData.append("file", values.photoURL)
                await axios.post(`${process.env.REACT_APP_API_URL}/backend/mail/installation.php`, formData)
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
            required: true,
            description: "ünvanınız ile birlikte giriniz. örn: 'Uzm. Dyt. Ad Soyad'"
        },
        {
            element: Input,
            label: "telefon numaranız",
            type: "text",
            name: "phone",
            value: values.phone,
            touched: touched.phone,
            errors: errors.phone,
            required: true,
        },
        {
            element: Input,
            label: "Email Adresiniz",
            type: "email",
            name: "email",
            value: values.email,
            touched: touched.email,
            errors: errors.email,
            required: true,
        },
        {
            element: Input,
            label: "çalışma saat aralığı",
            type: "text",
            name: "working",
            value: values.working,
            touched: touched.working,
            errors: errors.working,
            required: true,
            description: "randevu takviminizde hangi çalışma saat aralığının olmasını istediğini belirtiniz. örn: '8:00 - 18:00'"
        },
        {
            element: TextArea,
            label: "adres",
            rows: 5,
            name: "address",
            value: values.address,
            touched: touched.address,
            errors: errors.address,
            required: true
        },
        {
            element: Input,
            label: "facebook profil linki",
            type: "text",
            name: "facebook",
            value: values.facebook,
            touched: touched.facebook,
            errors: errors.facebook,
            description: "varsa facebook profil linkiniz"
        },
        {
            element: Input,
            label: "instagram profil linki",
            type: "text",
            name: "instagram",
            value: values.instagram,
            touched: touched.instagram,
            errors: errors.instagram,
            description: "varsa instagram profil linkiniz"
        },
        {
            element: Input,
            label: "twitter profil linki",
            type: "text",
            name: "twitter",
            value: values.twitter,
            touched: touched.twitter,
            errors: errors.twitter,
            description: "varsa twitter profil linkiniz"
        },
        {
            element: Input,
            label: "youtube profil linki",
            type: "text",
            name: "youtube",
            value: values.youtube,
            touched: touched.youtube,
            errors: errors.youtube,
            description: "varsa youtube profil linkiniz"
        },
        {
            element: Input,
            label: "linkedin profil linki",
            type: "text",
            name: "linkedin",
            value: values.linkedin,
            touched: touched.linkedin,
            errors: errors.linkedin,
            description: "varsa linkedin profil linkiniz"
        },
        {
            element: Input,
            label: "tiktok profil linki",
            type: "text",
            name: "tiktok",
            value: values.tiktok,
            touched: touched.tiktok,
            errors: errors.tiktok,
            description: "varsa tiktok profil linkiniz"
        },
    ]

    return (
        <div className="mt-20">
            <Title title={"diyetisyen kurulum formu"} />
            <div className="text-sm max-w-lg mx-auto p-5">
                <form onSubmit={handleSubmit} className="grid gap-y-3 relative">
                    {/* <h2 className="font-arista text-xl text-center">iletişim formu</h2> */}
                    <UploadImage setFieldValue={setFieldValue} photoURL={values.photoURL} errors={errors.photoURL} touched={touched.photoURL} handleBlur={handleBlur} />
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
                    <button type="submit" className="btn-primary text-xs w-full disabled:bg-zinc-400" disabled={isSubmitting}>kurulum formunu gönder</button>
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
            </div>
        </div>
    )
}

export default CustomerForm