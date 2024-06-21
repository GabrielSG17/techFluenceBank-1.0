'use client'
import CountUp from 'react-countup'

const ContadorAnimado = ({ quantia }: { quantia: number }) => {
  return (
    <div className='w-full'>
      <CountUp
        duration={2.75}
        decimals={2}
        separator='.'
        decimal=","
        prefix="R$"
        end={quantia} />
    </div>
  )
}

export default ContadorAnimado
