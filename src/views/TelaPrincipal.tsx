"use client";

import Image from "next/image";
import styles from "@/views/telaPrincipal.module.css";
import { infoTime } from "@/functions/infoTime";
import React from "react";
import { Degrade } from "@/components/bgDegrade";
import { useFetchContext } from "@/context/useContex";
import Button from "@/components/Button";
import TabelaLista from "@/components/principal/Tabela";

export default function TabelaCliente() {
  const dataAtual = new Date().getFullYear();
  const { value, data, setValue, loading, error } = useFetchContext();
  const [hoverTime, setHoverTime] = React.useState<string | null>(null);
  const [hovered, setHovered] = React.useState<string | null>(null);
  const tempoRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (hoverTime) {
      tempoRef.current = setTimeout(() => {
        setHovered(hoverTime);
      }, 500);
    }

    return () => {
      if (tempoRef.current) clearTimeout(tempoRef.current);
    };
  }, [hoverTime]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Nenhum dado encontrado.</p>;

  const handleEnter = (name: string) => {
    if (tempoRef.current) clearTimeout(tempoRef.current);
    setHoverTime(name);
  };

  const handleLeave = () => {
    if (tempoRef.current) clearTimeout(tempoRef.current);
    setHoverTime(null);
    setHovered(null);
  };
  console.log(error);

  return (
    <div
      className={styles.pagina}
      style={hovered ? Degrade(infoTime[hovered]) : undefined}
    >
      {hovered && (
        <Image
          src={infoTime[hovered].caminho}
          className={styles.imgLeft}
          alt="Escudo direito"
          width={280}
          height={280}
        />
      )}
      <div className={styles.titulo}>
        <Image
          src={"/campeonatoBrasileiro.svg"}
          alt="Escudo direito"
          width={80}
          height={80}
        />
        <p>Brasileirão Série A</p>
        <p>{value}</p>
      </div>
      <div className={styles.tabela}>
        <TabelaLista dados={data} onHover={handleEnter} onLeave={handleLeave} />
        <div className={styles.botaoFixado}>
          {+value !== dataAtual ? (
            <Button
              title="Clique aqui para acessar as informações do ano seguinte"
              onClick={() => setValue(String(+value + 1))}
            >
              {"<"}
            </Button>
          ) : (
            <Button
              disabled
              title="Clique aqui para acessar as informações do ano seguinte"
              onClick={() => setValue(String(+value + 1))}
            >
              {"<"}
            </Button>
          )}
          {+value !== dataAtual - 1 ? (
            <Button
              title="Clique aqui para acessar as informações do ano anterios"
              onClick={() => setValue(String(+value - 1))}
            >
              {">"}
            </Button>
          ) : (
            <Button
              disabled
              title="Clique aqui para acessar as informações do ano anterios"
              onClick={() => setValue(String(+value - 1))}
            >
              {">"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
