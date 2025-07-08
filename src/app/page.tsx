import { Metadata } from "next";
import TabelaCliente from "@/views/TelaPrincipal";

export const metadata: Metadata = {
  title: "Tabela | Serie A",
  icons:{
    icon: '/campeonatoBrasileiro.svg'
  }
};

export default async function Page() {
  return <TabelaCliente />;
}
