"use client";

import style from "./trend-section.module.css";
import Trend from "@/app/(afterLogin)/_component/trend";
import { usePathname } from "next/navigation";
export default function TrendSection() {
  const pathname = usePathname();

  if (pathname === "/explore") return null;

  return (
    <div className={style.trendBackground}>
      <div className={style.trendContainer}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
