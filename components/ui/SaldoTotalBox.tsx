import ContadorAnimado from './ContadorAnimado'
import GraficoDonut from './graficos/graficoDonut'

const SaldoTotalBox = ({ contas = [], todosBancos, saldoTotalAtual }: SaldoTotalBoxPropriedades) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        <GraficoDonut contas={contas} />
      </div>

      <div className='flex-col gap-6'>
        <h2 className='header-2'>
          {todosBancos > 1 ? `${todosBancos} contas em bancos` : `${todosBancos} conta em banco`}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Saldo Total
          </p>

          <div className='total-balance-amount flex-center gap-2'>
            <ContadorAnimado quantia={saldoTotalAtual} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SaldoTotalBox
