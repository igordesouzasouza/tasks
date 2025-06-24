'use client'

import Link from "next/link"
// import {cn} from "@lib/utils"

const links = [
    { name: "Home", href: "/", },
    { name: "Listab de Tarefas", href: "/tarefas", },
    { name: "Login", href: "/login", },
    { name: "Pagina de Comentarios", href: "/comentarios", }
]

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-white text-xl font-bold">LOGO</div>
                <ul className="flex gap-8 text-white text-sm uppercase tracking-wide">
                    {links.map(link => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="transition-colors duration-300 hover:text-teal-400"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}