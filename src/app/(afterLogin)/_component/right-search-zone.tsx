"use client";

import style from "./right-search-zone.module.css";
import SearchForm from "@/app/(afterLogin)/_component/search-form";
import { usePathname } from "next/navigation";
export default function RightSearchZone() {
  const pathname = usePathname();
  if (pathname === "/explore") return null;
  if (pathname === "/search") {
  }
  return (
    <div className={style.container}>
      <SearchForm />
    </div>
  );
}
