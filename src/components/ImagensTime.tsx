import { infoTime } from "@/functions/infoTime";
import Image from "next/image";

type Imagens = Omit<React.ComponentProps<typeof Image>, "src" | "alt"> & {
  time: string;
};

export default function ImagensTime(props: Imagens) {
  return (
    <Image
      {...props}
      src={infoTime[props.time].caminho}
      alt={props.time}
    />
  );
}
