import React from 'react'
import Link from "next/link"

function Header() {
    return (
        <header className="top-0 left-0 z-50 flex flex-col justify-center align-middle w-[100%] mx-auto fixed opacity-95 ">

            <nav className="font-sans flex flex-row text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow-2xl sm:items-baseline">

                <Link href="/" className="text-xl no-overline text-grey-darkest hover:text-yellow-900 mx-auto link link-overline link-overline-black text-black">Home</Link>
                <Link href="/recipes" className="text-xl no-overline text-grey-darkest hover:text-yellow-900 mx-auto link link-overline link-overline-black text-black">Recipes</Link>
                <img src="/logo-light.png"
                    alt="logo"
                    className="object-none  w-[135px] h-[120px] mx-auto transition ease-in-out delay-150  sm:hover:scale-110 duration-300" />
                <Link href="/two" className="text-xl no-overline text-grey-darkest hover:text-yellow-900 mx-auto link link-overline-r link-overline-black-r text-black">Two</Link>
                <Link href="/three" className="text-xl no-overline text-grey-darkest hover:text-yellow-900 mx-auto link link-overline-r link-overline-black-r text-black">Three</Link>

            </nav>
        </header>
    )
}

export default Header