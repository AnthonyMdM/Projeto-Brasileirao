import { infoTime } from "@/functions/infoTime";
import type { Metadata } from "next";
import TelaInfo from "@/views/TelaInfoTime";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params?.id;

  const entrada = Object.entries(infoTime).find(([, info]) => info.url === id);

  const nomeOriginal = entrada?.[0] ?? "Time não encontrado";

  return {
    title: `Informações do ${nomeOriginal}`,
    description: `Detalhes do time ${nomeOriginal} na temporada atual.`,
    icons: {
      icon: `${infoTime[nomeOriginal].caminho}`,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  return <TelaInfo id={params.id} />;
}
