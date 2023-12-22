import styles from "@/app/(beforeLogin)/_component/main.module.css";
import { ReactNode } from "react";
export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
