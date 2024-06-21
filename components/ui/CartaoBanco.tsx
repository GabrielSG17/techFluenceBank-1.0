import { formatarQuantia } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const CartaoBanco = ({ conta, nomeDeUsuario, mostrarSaldo = true }: CartaoDeCreditoPropriedades) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {conta?.nome || nomeDeUsuario}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatarQuantia(conta?.saldoAtual)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">
                {nomeDeUsuario}
              </h1>
              <h2 className="text-12 font-semibold text-white">
                ●● / ●●
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image
            src="/icons/Paypass.svg"
            width={20}
            height={24}
            alt="Bandeira"
          />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="linhas"
          className="absolute top-0 left-0"
        />

        {/* Copiar numero do cartao */}
      </Link>
    </div>
  )
}

export default CartaoBanco
