"use server";

import { TABELA } from "@/functions/api";
import { Standing } from "../context/useContex";

export default async function fetchTabela(
  ano: number = new Date().getFullYear()
): Promise<{ data: Standing[] | null; error: string | null }> {
  try {
    const { url } = TABELA(String(ano));
    const response = await fetch(url, {
      next: {
        tags: [`tabela-${ano}`],
      },
    });

    if (!response.ok) {
      throw new Error("Erro na requisição.");
    }

    const json = await response.json();
    const ultimoItem = json[json.length - 1];
    const data = ultimoItem?.Standings ?? [];
    return { data, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : "Erro desconhecido",
    };
  }
}
