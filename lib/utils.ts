/* eslint-disable no-prototype-builtins */
import { type ClassValue, clsx } from "clsx";
import qs from "query-string";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// FORMAT DATE TIME
export const formatarDataEHora = (dateString: Date) => {
  const dataEHoraOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dataDiaOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    year: "numeric", // numeric year (e.g., '2023')
    month: "2-digit", // abbreviated month name (e.g., 'Oct')
    day: "2-digit", // numeric day of the month (e.g., '25')
  };

  const dataOptions: Intl.DateTimeFormatOptions = {
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  };

  const horaOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dataEHoraFormatados: string = new Date(dateString).toLocaleString(
    "pt-BR",
    dataEHoraOptions
  );

  const dataDiaFormatada: string = new Date(dateString).toLocaleString(
    "pt-BR",
    dataDiaOptions
  );

  const DataFormatada: string = new Date(dateString).toLocaleString(
    "pt-BR",
    dataOptions
  );

  const horaFormatada: string = new Date(dateString).toLocaleString(
    "pt-BR",
    horaOptions
  );

  return {
    dataEhora: dataEHoraFormatados,
    dataDia: dataDiaFormatada,
    dataOnly: DataFormatada,
    horaOnly: horaFormatada,
  };
};

export function formatarQuantia(quantia: number): string {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return formatter.format(quantia);
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const removerCaracteresEspeciais = (value: string) => {
  return value.replace(/[^\w\s]/gi, "");
};

interface UrlQueryParametros {
  parametros: string;
  chave: string;
  valor: string;
}

export function formarQueryUrl({ parametros, chave, valor }: UrlQueryParametros) {
  const urlAtual = qs.parse(parametros);

  urlAtual[chave] = valor;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: urlAtual,
    },
    { skipNull: true }
  );
}

export function getAccountTypeColors(type: TipoDeConta) {
  switch (type) {
    case "depósito":
      return {
        bg: "bg-blue-25",
        lightBg: "bg-blue-100",
        title: "text-blue-900",
        subText: "text-blue-700",
      };

    case "crédito":
      return {
        bg: "bg-success-25",
        lightBg: "bg-success-100",
        title: "text-success-900",
        subText: "text-success-700",
      };

    default:
      return {
        bg: "bg-green-25",
        lightBg: "bg-green-100",
        title: "text-green-900",
        subText: "text-green-700",
      };
  }
}

export function somaCategoriasDaTransacao(
  transactions: Transacao[]
): CategoriaSoma[] {
  const categoriaDeSoma: { [category: string]: number } = {};
  let somaTotal = 0;

  transactions &&
    transactions.forEach((transaction) => {
      const categoria = transaction.categoria;

      if (categoriaDeSoma.hasOwnProperty(categoria)) {
        categoriaDeSoma[categoria]++;
      } else {
        categoriaDeSoma[categoria] = 1;
      }
      somaTotal++;
    });

  const categoriasAgregadas: CategoriaSoma[] = Object.keys(categoriaDeSoma).map(
    (category) => ({
      nome: category,
      soma: categoriaDeSoma[category],
      total: somaTotal,
    })
  );

  categoriasAgregadas.sort((a, b) => b.soma - a.soma);

  return categoriasAgregadas;
}

export function getIdDoCLientePelaUrl(url: string) {
  const parteDaUrl = url.split("/")

  const idDoCliente = parteDaUrl[parteDaUrl.length - 1];

  return idDoCliente;
}

export function encriptografarId(id: string) {
  return btoa(id);
}

export function descriptografarId(id: string) {
  return atob(id);
}

export const getStatusDaTransacao = (date: Date) => {
  const hoje = new Date();
  const doisDiasAtras = new Date(hoje);
  doisDiasAtras.setDate(hoje.getDate() - 2);

  return date > doisDiasAtras ? "Processando" : "Sucesso";
};
