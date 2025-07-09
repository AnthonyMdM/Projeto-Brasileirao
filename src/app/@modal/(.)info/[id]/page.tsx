import { infoTime } from "@/functions/infoTime";
import type { Metadata } from "next";
import TelaInfoModal from "@/views/TelaInfoModal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const entrada = Object.entries(infoTime).find(([, info]) => info.url === id);
  const nomeOriginal = entrada?.[0] ?? "Time não encontrado";

  return {
    title: `Informações do ${nomeOriginal}`,
    description: `Detalhes do time ${nomeOriginal} na temporada atual.`,
    icons: {
      icon: `${infoTime[nomeOriginal]?.caminho ?? "/default-icon.png"}`,
    },
  };
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  return <TelaInfoModal id={id} />;
}
