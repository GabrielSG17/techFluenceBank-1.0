import HeaderBox from "@/components/ui/HeaderBox";
import SaldoTotalBox from "@/components/ui/SaldoTotalBox";
import RightSideBar from "@/components/ui/navegacao/RightSideBar";
import React from "react";

const Home = () => {
  const usuarioLogado = { primeiroNome: 'Gabriel', ultimoSobrenome: 'Gomes', email: 'gabrielsouzagomes@hotmail.com' }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            tipo="cumprimento"
            titulo="Bem Vindo"
            usuario={usuarioLogado?.primeiroNome || 'Convidado'}
            subTitulo="Acesse e gerencie sua conta e transações de forma eficiente"
          />

          <SaldoTotalBox
            contas={[]}
            todosBancos={1}
            saldoTotalAtual={1326.24}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        usuario={usuarioLogado}
        transacoes={1}
        bancos={[{ saldoAtual: 1326.24 }, { saldoAtual: 476.24 }]}
      />
    </section>
  )
}

export default Home