import { useState, useEffect } from 'react'

function UploadImage({ setFieldValue, photoURL, errors, touched, handleBlur }) {

    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!photoURL) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(photoURL)
        setPreview(objectUrl)
        // return () => {
        //     URL.revokeObjectURL(objectUrl)
        //     setFieldValue("photoURL", "")
        // }
    }, [photoURL])// eslint-disable-line
    return (
        <div className={`grid gap-3 border rounded p-3 ${touched && errors ? "border-red-500" : "border-gray-800"}`}>
            <div className='flex justify-center'>
                <img src={preview} alt="" className={`${preview ? "h-52 w-52" : "h-0 w-0"}  rounded-full`} />
            </div>
            <div className='w-full grid gap-y-1'>
                <label htmlFor="photoURL" className='font-light text-sm font-arista'>logunuzu yükleniz</label>
                {errors && touched && (<span className='text-red-400 text-xs'>{errors}</span>)}
                <p className='text-xs px-1'>Yüklediğiniz logo JPEG, PNG veya GIF formatında olmalıdır.</p>
                <input type="file" name="photoURL" id="photoURL"
                    className={`file:bg-lime-500 file:hover:bg-lime-500/90 file:border-0 file:p-1 file:rounded file:text-white file:font-arista file:cursor-pointer text-sm px-2 ${touched && errors ? "error" : ""}`}
                    onChange={(e) => {
                        setFieldValue("photoURL", e.target?.files[0])
                    }}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    )
}

export default UploadImage