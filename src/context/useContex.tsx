"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import fetchTabela from "@/actions/fetch-tabela";

export type Standing = {
  Name: string;
  ShortName: string;
  Order: number;
  Points: number;
  Games: number;
  Wins: number;
  GoalsScored: number;
  GoalsAgainst: number;
  GoalsDifferential: number;
  Losses: number;
  Draws: number;
  Scope: string;
  GlobalTeamID: number;
};

type FetchContextType = {
  value: string;
  data: Standing[] | null;
  setValue: (val: string) => void;
  loading: boolean;
  error: string | null;
};

const UserContext = createContext<FetchContextType | undefined>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dataAtual = new Date().getFullYear();
  const [value, setValue] = useState(String(dataAtual));
  const [data, setData] = useState<Standing[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInfo(ano: number) {
      setLoading(true);
      setError(null);
      try {
        const { data: dataFetch, error: fetchError } = await fetchTabela(ano);
        if (fetchError || !dataFetch) {
          setError(fetchError || "Histórico não encontrado");
          setData(null);
        } else {
          setData(dataFetch);
        }
      } catch {
        setError("Erro inesperado");
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchInfo(+value);
  }, [value]);

  return (
    <UserContext.Provider value={{ value, data, setValue, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useFetchContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useFetchContext deve estar dentro do UserContextProvider");
  }
  return context;
};
