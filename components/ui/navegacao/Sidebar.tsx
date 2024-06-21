'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({ usuario }: SiderbarPropriedades) => {
  const caminho = usePathname()
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href="/"
          className='flex mb-12 cursor-pointer items-center gap-2'>
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt='TechFluence Logo'
            className='size-[24px] max-xl:size-14'
          />
          <h1 className='sidebar-logo'>TechFluence</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const ativo = caminho === item.rota || caminho.startsWith(`${item.rota}/`)

          return (
            <Link href={item.rota} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': ativo })}
            >
              <div className='relative size-6'>
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ 'brightness-[3] invert-0': ativo })}
                />
              </div>
              <p className={cn('sidebar-label', { '!text-white': ativo })}>
                {item.label}
              </p>
            </Link>
          )
        })}

        USER
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar
