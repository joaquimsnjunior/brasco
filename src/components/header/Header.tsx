import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/logo-brasco.svg'

function Header() {
  return (
    <div>
      <header className="bg-stone-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <Image 
                  src={Logo}
                  alt='Logo Brasco'
                  width={100}
                  height={49}
                />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#">Internacional</a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#">Ações</a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#">FIIs</a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#">Fundos</a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#">Tesouro</a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#">Índice</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-stone-900 transition hover:text-gray-300/75 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Entrar
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="group inline-block rounded text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    href="#"
                  >
                    <span className="block rounded-sm bg-stone-900 px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                      Cadastre-se grátis!
                    </span>
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
