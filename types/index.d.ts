/* eslint-disable no-unused-vars */

declare type SearchParamPropriedades = {
  parametros: { [key: string]: string };
  procurarParametros: { [key: string]: string | string[] | undefined };
};

// ========================================

declare type SignUpParametros = {
  primeiroNome: string;
  ultimoSobrenome: string;
  endereco1: string;
  cidade: string;
  estado: string;
  cep: string;
  dataDeNascimento: string;
  cpf: string;
  email: string;
  senha: string;
};

declare type LoginUsuario = {
  email: string;
  senha: string;
};

declare type Usuario = {
  $id: string;
  email: string;
  idDoUsuario: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  primeiroNome: string;
  ultimoSobrenome: string;
  endereco1: string;
  cidade: string;
  estado: string;
  cep: string;
  dataDeNascimento: string;
  cpf: string;
};

declare type NewUsuarioParametros = {
  idDoUsuario: string;
  email: string;
  nome: string;
  senha: string;
};

declare type Account = {
  id: string;
  saldoDisponivel: number;
  saldoAtual: number;
  nomeOficial: string;
  mascara: string;
  idDaInstituicao: string;
  nome: string;
  tipo: string;
  subTipo: string;
  appwriteItemId: string;
  idCompartilhavel: string;
};

declare type Transacao = {
  id: string;
  $id: string;
  nome: string;
  canalDePagamento: string;
  tipo: string;
  idDaConta: string;
  quantia: number;
  pendente: boolean;
  categoria: string;
  data: string;
  imagem: string;
  tipo: string;
  $criadoEm: string;
  canal: string;
  idDoBancoDoRemetente: string;
  idDoBancoDoDestinatario: string;
};

declare type Banco = {
  $id: string;
  idDaConta: string;
  idDoBanco: string;
  tokenDeAcesso: string;
  urlDaFonte: string;
  idDoUsuario: string;
  idCompartilhavel: string;
};

declare type TipoDeConta =
  | "depósito"
  | "crédito"
  | "empréstimo "
  | "investimento"
  | "outro";

declare type Categoria = "Alimentos e Bebidas" | "Viagens" | "Transferências";

declare type CategoriaSoma = {
  nome: string;
  soma: number;
  total: number;
};

declare type Destinatario = {
  primeiroNome: string;
  ultimoSobreNome: string;
};

declare type ParametrosDeTransferencia = {
  urlDaFonte: string;
  urlDoDestinatario: string;
  quantia: string;
};

declare type AdicionarFonteParametros = {
  dwollaCustomerId: string;
  processorToken: string;
  nomeDoBanco: string;
};

declare type NewDwollaCustomerParametros = {
  primeiroNome: string;
  ultimoSobreNome: string;
  email: string;
  tipo: string;
  endereco1: string;
  cidade: string;
  estado: string;
  cep: string;
  dataDeNascimento: string;
  cpf: string;
};

declare interface CartaoDeCreditoPropriedades {
  conta: Account;
  nomeDeUsuario: string;
  mostrarSaldo?: boolean;
}

declare interface InformacoesDoBancoPropriedades {
  conta: Account;
  appwriteItemId?: string;
  tipo: "full" | "card";
}

declare interface HeaderBoxPropriedades {
  tipo?: "titulo" | "cumprimento";
  titulo: string;
  subTitulo: string;
  usuario?: string;
}

declare interface MobileNavPropriedades {
  usuario: Usuario;
}

declare interface PageHeaderPropriedades {
  tituloTopo: string;
  tituloInferior: string;
  DescricaoTopo: string;
  DescricaoInferior: string;
  conectarBanco?: boolean;
}

declare interface PaginacaoPropriedades {
  page: number;
  totalPages: number;
}

declare interface PlaidLinkPropriedades {
  usuario: Usuario;
  versao?: "primary" | "ghost";
  dwollaCustomerId?: string;
}

// declare type Usuario = sdk.Models.Document & {
//   idDaConta: string;
//   email: string;
//   nome: string;
//   items: string[];
//   tokenDeAcesso: string;
//   imagem: string;
// };

declare interface FormularioDeAutenticacaoPropriedades {
  type: "entrar" | "cadastrar";
}

declare interface DropdownBancoPropriedades {
  contas: Account[];
  setValue?: UseFormSetValue<any>;
  otherStyles?: string;
}

declare interface BankTabItemPropriedades {
  account: Account;
  appwriteItemId?: string;
}

declare interface SaldoTotalBoxPropriedades {
  contas: Account[];
  todosBancos: number;
  saldoTotalAtual: number;
}

declare interface FooterPropriedades {
  Usuario: Usuario;
}

declare interface RightSidebarPropriedades {
  usuario: Usuario;
  transacoes: Transaction[];
  bancos: Bank[] & Account[];
}

declare interface SiderbarPropriedades {
  usuario: Usuario;
}

declare interface PropriedadesDeTransacoesRecentes {
  contas: Account[];
  transacoes: Transaction[];
  appwriteItemId: string;
  page: number;
}

declare interface TabelaDeHistoricoDePropriedadesDaTransacao {
  transacoes: Transaction[];
  page: number;
}

declare interface CategoriaBadgePropriedades {
  categoria: string;
}

declare interface TransactionTablePropriedades {
  transacoes: Transaction[];
}

declare interface categoriaPropriedades {
  categoria: categoriaCount;
}

declare interface DoughnutChartPropriedades {
  contas: Account[];
}

declare interface PropriedadesDaFormaDePagamento {
  contas: Account[];
}

// Actions
declare interface getPropriedadesDasContas {
  idDoUsuario: string;
}

declare interface getAccountPropriedades {
  appwriteItemId: string;
}

declare interface getInstitutionPropriedades {
  idDaInstituicao: string;
}

declare interface getTransacoesPropriedades {
  tokenDeAcesso: string;
}

declare interface CreateFundingSourceOptions {
  idDoCliente: string; // Dwolla Customer ID
  nomeDaFonte: string; // Dwolla Funding Source nome
  tokenDoPlaid: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
}

declare interface CreateTransactionPropriedades {
  nome: string;
  quantia: string;
  idDoRemetente: string;
  idDoBancoRemetente: string;
  idDoDestinatario: string;
  idDoBancoDestinatario: string;
  email: string;
}

declare interface getTransacoesByidDoBancoPropriedades {
  idDoBanco: string;
}

declare interface signInPropriedades {
  email: string;
  senha: string;
}

declare interface getUsuarioInfoPropriedades {
  idDoUsuario: string;
}

declare interface exchangePublicTokenPropriedades {
  tokenPublico: string;
  usuario: Usuario;
}

declare interface createBankAccountPropriedades {
  accessToken: string;
  idDoUsuario: string;
  idDaConta: string;
  idDoBanco: string;
  urlDaFonte: string;
  idCompartilhavel: string;
}

declare interface getBanksPropriedades {
  idDoUsuario: string;
}

declare interface getBankPropriedades {
  idDoDocumento: string;
}

declare interface getBankByidDaContaPropriedades {
  idDaConta: string;
}
