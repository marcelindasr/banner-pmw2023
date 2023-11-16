'use client'
import React from "react"
import "@components/navbar/navbar.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className="navbar-container">
        <Link className={`link ${pathname === '/' ? 'active' : 'default'}`} href="/">
            Home
        </Link>
        <p>|</p>
        <Link className={`link ${pathname === '/diary' ? 'active' : 'default'}`} href="/diary">
            Fetch
        </Link>
    </div>
  )
}

export default Navbar