import { TimeInfo } from "@/functions/infoTime";

export function Degrade(time: TimeInfo): React.CSSProperties {
  const { corPrincipal, corSecundaria, corTerciaria } = time;

  const cor1 = corPrincipal ?? "#222";
  const cor2 = corSecundaria ?? "#555";
  const cor3 = corTerciaria ?? cor1;

  return {
    background: `linear-gradient(-45deg,
      ${cor1} 0%,
      ${cor1} 25%,
      ${cor2} 40%,
      ${cor3} 60%,
      ${cor1} 80%,
      ${cor1} 100%
    )`,
    backgroundSize: "400% 400%",
    animation: "degradeLoop 15s ease infinite",
  };
}

