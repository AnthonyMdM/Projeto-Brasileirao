import { Standing } from "@/context/useContex";
import ImagensTime from "@/components/ImagensTime";
import Link from "next/link";
import { infoTime } from "@/functions/infoTime";
import styles from "@/components/principal/Tabela.module.css";

export default function TabelaLista({
  dados,
  onHover,
  onLeave,
}: {
  dados: Standing[];
  onHover: (nome: string) => void;
  onLeave: () => void;
}) {
  const ordenado = dados
    .filter((t) => t.Scope === "Total")
    .sort((a, b) => a.Order - b.Order);

  return (
    <ul className={styles.lista}>
      <li className={styles.cabecalho}>
        <p>Time</p>
        <div className={styles.informacoes}>
          <p>PTS</p> <p>PJ</p> <p>V</p> <p>D</p> <p>E</p> <p>GP</p> <p>GA</p>{" "}
          <p>DG</p>
        </div>
      </li>
      {ordenado.map((t) => (
        <li
          key={t.ShortName}
          className={styles.itens}
          onMouseEnter={() => onHover(t.ShortName)}
          onMouseLeave={onLeave}
        >
          <Link
            href={`/info/${infoTime[t.ShortName].url}`}
            className={styles.link}
            prefetch={false}
          >
            <div className={styles.time}>
              <div className={styles.classificacao}>
                <p>{t.Order}º</p>
                <ImagensTime
                  time={t.ShortName}
                  width={35}
                  height={35}
                  style={{
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              <p className={styles.noWrap}>
                {infoTime[t.ShortName].nomeFamoso ?? t.ShortName}
              </p>
            </div>
            <div className={styles.informacoes}>
              <p>{t.Points}</p> <p>{t.Games}</p> <p>{t.Wins}</p>{" "}
              <p>{t.Losses}</p>
              <p>{t.Draws}</p> <p>{t.GoalsScored}</p> <p>{t.GoalsAgainst}</p>
              <p>{t.GoalsDifferential}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
