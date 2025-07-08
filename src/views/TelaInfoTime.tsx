"use client";
import styles from "@/views/telaTimeInfo.module.css";
import { infoTime } from "@/functions/infoTime";
import { useFetchContext } from "@/context/useContex";
import ImagensTime from "@/components/ImagensTime";
import Listas from "@/components/modal/listasInfoModal";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const PizzaChart = dynamic(() => import("@/components/modal/graficoModal"), {
  ssr: false, // necessário por depender do DOM
});

export default function TelaInfo({ id }: { id: string }) {
  const { data, value, loading, error } = useFetchContext();
  const entrada = Object.entries(infoTime).find(([, info]) => info.url === id);
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!data) {
    return <div>Sem dados disponíveis.</div>;
  }
  if (!entrada) {
    return <div>Time não encontrado.</div>;
  }

  const [nomeOriginal, info] = entrada;
  const dadosFiltrados = data?.filter(
    (item) => item.ShortName === nomeOriginal
  );
  const cor = info.corPrincipal?.trim();
  console.log(loading);
  return (
    <div className={styles.conteudo}>
      <div className={styles.linha} style={{ backgroundColor: cor }}>
        <div className={styles.linhaImg}>
          <Link href={"/"}>
            <Image
              src={"/arrowBack.svg"}
              alt="Return to home"
              width={50}
              height={50}
              // onClick={handleOutsideClick}
            />
          </Link>
          <ImagensTime
            time={nomeOriginal}
            width={60}
            height={60}
            className={styles.propsImage}
          />
        </div>
        <h1 className={styles.titulo}>{nomeOriginal.toUpperCase()}</h1>
      </div>
      <div className={styles.dados}>
        <h2>
          Dados do {nomeOriginal} na temporada de {value}
        </h2>
      </div>
      <div className={styles.lista}>
        <Listas values="Total" label="Valores Totais" data={dadosFiltrados} />
        <Listas values="Home" label="Dentro de Casa" data={dadosFiltrados} />
        <Listas values="Away" label="Fora de Casa" data={dadosFiltrados} />
      </div>
      <div className={styles.grafico}>
        <div className={styles.dados}>
          <h2>Estatísticas</h2>
        </div>
        <div className={styles.graficos}>
          <PizzaChart
            values="Total"
            label="Valores Totais"
            data={dadosFiltrados}
          />
          <PizzaChart
            values="Home"
            label="Dentro de Casa"
            data={dadosFiltrados}
          />
          <PizzaChart
            values="Away"
            label="Fora de Casa"
            data={dadosFiltrados}
          />
        </div>
      </div>
    </div>
  );
}
