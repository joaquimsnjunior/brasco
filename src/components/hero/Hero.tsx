import React from 'react'

function Hero() {
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="h-screen bg-stone-900">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-medium text-white md:text-3xl">
              Explore o ativo de sua escolha para acessar cotações, fundamentos e gráficos de forma <div className='font-bold'>instantânea.</div>
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
              <label htmlFor="Search" className="sr-only"> Pesquisar ativo </label>

              <input
                  type="text"
                  id="Search"
                  placeholder="Pesquisar ativo..."
                  className="w-full rounded-md bg-stone-800 outline-none text-white placeholder:text-gray-300 px-8 py-3 shadow-sm sm:text-sm"
                />
              </div>

              {/* Border - Left */}

                <a
                  className="group relative inline-flex items-center border-none text-white overflow-hidden rounded border border-current px-8 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                  href="#"
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      className="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium transition-all group-hover:me-4"> Pesquisar </span>
                </a>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
