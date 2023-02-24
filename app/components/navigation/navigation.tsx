import Link from "next/link";
import styles from './navigation.module.css'

const links = [
    {
        ruta: "/",
        label: "home"
    },
    {
        ruta: "/about",
        label: "about"
    },
    {
        ruta: "/post",
        label:"post"
    }
]

export const Navigation = () => {
    return (
        <header className={styles.header}>
                {links.map(({ ruta, label }) =>
                    <li className={styles.li} key={label}>
                        <Link href={ruta}>
                            {label}
                        </Link>
                    </li>
                )}
        </header>
    )
}