import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function navbar() {
  return (
    <div className="bg-[url('/background-image.svg')] bg-cover bg-no-repeat">
      {/* Navigation Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#5B5B5B]/[.4]">
        <Link className="flex items-center justify-center" href="/">
          <span className="sr-only">Singulariti</span>
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Singulariti Logo"
            className="h-10"
          />
          {/* <span className="ml-2 text-lg font-semibold">Singulariti</span> */}
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-font-yellow transition-colors" href="/">
            Home
          </Link><Link className="text-sm font-medium hover:text-font-yellow transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-font-yellow transition-colors" href="#download">
            Download
          </Link>
          <Link className="text-sm font-medium hover:text-font-yellow transition-colors" href="#about">
            AboutUs
          </Link>
        </nav>
      </header>
    </div>
  )
}