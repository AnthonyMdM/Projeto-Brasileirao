"use client";
import TelaInfo from "./TelaInfoTime";
import styles from "@/views/telaInfoModal.module.css";
import { useRouter, usePathname } from "next/navigation";

export default function TelaInfoModal({ id }: { id: string }) {
  const router = useRouter();
  const pathname = usePathname();
  if (!pathname.includes("info")) {
    return null;
  }
  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) router.back();
  }
  return (
    <div className={styles.container} onClick={handleOutsideClick}>
      <div className={styles.modalContent}>
        <TelaInfo id={id} />
      </div>
    </div>
  );
}
