import React from 'react'
import logo from "../../public/images/logo/header-logo.svg"
import cart from "../../public/images/logo/shopping-cart.svg"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="w-full h-30 navbar-grid bg-[#003BE2] text- flex items-center justify-between px-30">
            <div className="flex items-center">
                <Image
                    src={logo.src}
                    alt="Logo"
                    width={28}
                    height={31.5}
                    className="max-h-[31.5px] max-w-7 mr-[5.5px]"
                />
                <span className="text-[#F5F5F6] text-2xl font-display font-bold pt-2">ByteSpace</span>
            </div>
            <div className="flex space-x-6">
                <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                <Link href="/courses" className="text-white hover:text-gray-300">Courses</Link>
                <Link href="/creators" className="text-white hover:text-gray-300">Creators</Link>
            </div>
            <div className="flex space-x-6">
                <Link href="/" className="text-white hover:text-gray-300">Sign In</Link>
                <Link href="/courses" className="text-white hover:text-gray-300">Join Us</Link>
                <Link href="/creators" className="text-white hover:text-gray-300">
                    <Image
                        src={cart.src}
                        alt="Cart"
                        width={16}
                        height={20}
                        className="max-h-5 max-w-4"
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar