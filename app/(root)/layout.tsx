import MobileNavbar from "@/components/ui/navegacao/MobileNavbar"
import Sidebar from "@/components/ui/navegacao/Sidebar"
import Image from "next/image"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const logado = { primeiroNome: 'Gabriel', ultimoSobrenome: 'Gomes' }

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar usuario={logado} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="logo"
          />
          <div>
            <MobileNavbar usuario={logado} />
          </div>
        </div>
        {children}
      </div>
    </main>
  )
}