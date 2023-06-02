function Title({ title, color = false }) {
    return (
        <div className='text-lime-500 font-arista text-3xl text-center'>
            <h1 className={color ? color:""}>{title}</h1>
        </div>
    )
}

export default Title