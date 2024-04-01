import React from 'react'

function Stats() {
  return (
    <div>
      <section className="bg-stone-900">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Seu futuro financeiro começa aqui: simplifique seus investimentos com nossa plataforma!</h2>

            <p className="mt-4 text-gray-300 sm:text-xl">
              Domine o mercado financeiro: nosso app é sua arma para investir com poder!
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Usúarios Ativo</dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">+ 3.2m</dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium bg-gradient-to-r from-gray-500 via-pink-500 to-yellow-300 bg-clip-text text-transparent">A melhor Plataforma</dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">#1 Brasil</dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Segurança Nível</dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">10</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stats
