export function Input({ label, type, name, value, errors, touched, onChange, onBlur, required = false, description }) {
    return (
        <div className="relative group">
            <input
                type={type} name={name} id={name} required={required}
                className={`h-10 p-2.5 bg-zinc-50 w-full rounded outline-none border focus:border-lime-500 text-black text-sm ${touched && errors ? "border-red-500" : "border-gray-800"}`}
                value={value} onChange={onChange} onBlur={onBlur}
            />
            <div className={`absolute ${value?.length > 0 ? "-top-2.5" : "top-2.5"} pointer-events-none left-2 group-focus-within:-top-2.5 bg-zinc-50 rounded-t px-1 text-sm font-arista text-black transition-all`}>{label}</div>
            {errors && touched && <div className="absolute -top-2.5 right-2 text-sm bg-zinc-50 px-1 rounded-t text-red-500 font-arista">{errors}</div>}
            <p className="text-xs ml-2 py-0.5">{description}</p>
        </div>
    )
}

export function TextArea({ label, name, value, errors, touched, onChange, onBlur, required = false, description, rows }) {
    return (
        <div className="relative group">
            <textarea
                name={name} id={name} required={required} rows={rows}
                className={`bg-zinc-50 w-full p-2.5 rounded outline-none border focus:border-lime-500 text-black text-sm ${touched && errors ? "border-red-500" : "border-zinc-800"}`}
                value={value} onChange={onChange} onBlur={onBlur}
            />
            <div className={`absolute ${value?.length > 0 ? "-top-2.5" : "top-2.5"} pointer-events-none left-2 group-focus-within:-top-2.5 bg-zinc-50 rounded-t px-1 text-sm font-arista text-black transition-all`}>{label}</div>
            {errors && touched && <div className="absolute -top-2.5 right-2.5 text-sm bg-zinc-50 px-1 rounded-t text-red-500 font-arista">{errors}</div>}
            <p className="text-xs ml-2 py-0.5">{description}</p>
        </div>
    )
}