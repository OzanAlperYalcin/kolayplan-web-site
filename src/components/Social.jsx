import { social } from "../utils/social"

function Social() {
    return (
        <ul className="flex gap-2">
            {social.map((m, i) => (
                <a key={i} href={m.link} target="_blank" rel="noreferrer" className="group">
                    <li className={`border border-white ${m.border} rounded-full p-2 transition-all duration-500`}>
                        <m.icon className={`${m.color} transition-all duration-500`} />
                    </li>
                </a>
            ))}
        </ul>
    )
}

export default Social