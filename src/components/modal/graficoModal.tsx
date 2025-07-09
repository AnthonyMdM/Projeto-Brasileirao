"use client";
import styles from "@/components/modal/graficoModal.module.css";
import { Standing } from "@/context/useContex";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const options: ChartOptions<"pie"> = {
  responsive: true,

  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export default function PizzaChart({
  label,
  values,
  data: informacoes,
}: {
  label: string;
  values: string;
  data: Standing[] | undefined;
}) {
  const dadosFiltrados = informacoes?.find(
    (item) => item.Scope?.trim().toLowerCase() === values.trim().toLowerCase()
  );
  const PorcentagemWin = dadosFiltrados
    ? (+dadosFiltrados?.Wins / +dadosFiltrados?.Games) * 100
    : 0;
  const PorcentagemDraw = dadosFiltrados
    ? (+dadosFiltrados?.Draws / +dadosFiltrados?.Games) * 100
    : 0;
  const PorcentagemLosses = dadosFiltrados
    ? (+dadosFiltrados?.Losses / +dadosFiltrados?.Games) * 100
    : 0;

  if (!dadosFiltrados) {
    return <p>Dados não encontrados para {label}</p>;
  }

  const configuracoes = {
    labels: ["Vitórias", "Empates", "Derrotas"],
    datasets: [
      {
        label: `Desempenho - ${label}`,
        data: [
          dadosFiltrados.Wins,
          dadosFiltrados.Draws,
          dadosFiltrados.Losses,
        ],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.grafico}>
      <div className={styles.title}>
        <h2 className={styles.subtitle}>{label}</h2>
      </div>
      <div>
        <Pie data={configuracoes} options={options} />
      </div>
      <div className={styles.estatisticaBox}>
        <p className={styles.subtitle}>Estátisticas em Porcentagem</p>
        <div className={styles.estatistica}>
          <p>
            Vitória:
            {PorcentagemWin !== 0 ? ` ${PorcentagemWin.toFixed(1)}%` : " 0%"}
          </p>
          <p>
            Empate:
            {PorcentagemDraw !== 0 ? ` ${PorcentagemDraw.toFixed(1)}%` : " 0%"}
          </p>
          <p>
            Derrota:
            {PorcentagemLosses !== 0
              ? ` ${PorcentagemLosses.toFixed(1)}%`
              : " 0%"}
          </p>
        </div>
      </div>
    </div>
  );
}
