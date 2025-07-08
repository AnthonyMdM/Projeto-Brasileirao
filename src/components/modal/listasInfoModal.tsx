import { Standing } from "@/context/useContex";
import styles from "@/components/modal/listaInfoModal.module.css";

export default function Listas({
  label,
  values,
  data,
}: {
  label: string;
  values: string;
  data: Standing[] | undefined;
}) {
  const item = data?.find(
    (item) => item.Scope?.trim().toLowerCase() === values.trim().toLowerCase()
  );
  return (
    <section>
      <h2 className={styles.subtitle}>{label}</h2>
      <ul className={styles.listas}>
        <li className={styles.itens}>
          <p>
            <span>Pontos:</span> {item?.Points}
          </p>
          <p>
            <span>Partidas Jogadas:</span> {item?.Games}
          </p>
          <p>
            <span>Vitórias:</span> {item?.Wins}
          </p>
          <p>
            <span>Derrotas:</span> {item?.Losses}
          </p>
          <p>
            <span>Empates:</span> {item?.Draws}
          </p>
          <p>
            <span>Gols Marcados:</span> {item?.GoalsScored}
          </p>
          <p>
            <span>Gols Sofridos:</span> {item?.GoalsAgainst}
          </p>
          <p>
            <span>Diferença de Gols:</span> {item?.GoalsDifferential}
          </p>
        </li>
      </ul>
    </section>
  );
}
