import Image from "next/image"
import Link from "next/link"
import CartaoBanco from "../CartaoBanco"

const RightSideBar = ({ usuario, transacoes, bancos }: RightSidebarPropriedades) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">{usuario.primeiroNome[0]}</span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {usuario.primeiroNome} {usuario.ultimoSobrenome}
            </h1>
            <p className="profile-email">
              {usuario.email}
            </p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">Meus Bancos</h2>
          <Link
            href="/"
            className="flex gap-2">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="Adicionar"
            />
            <h2 className="text-14 font-semibold text-gray-600">
              Adicionar Banco
            </h2>
          </Link>
        </div>
        {bancos?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <CartaoBanco
                key={bancos[0].$id}
                conta={bancos[0]}
                nomeDeUsuario={`${usuario.primeiroNome} ${usuario.ultimoSobrenome}`}
                mostrarSaldo={false}
              />
            </div>
            {bancos[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <CartaoBanco
                  key={bancos[1].$id}
                  conta={bancos[10]}
                  nomeDeUsuario={`${usuario.primeiroNome} ${usuario.ultimoSobrenome}`}
                  mostrarSaldo={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSideBar
