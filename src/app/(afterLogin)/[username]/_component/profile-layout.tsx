"use client";

import Header from "@/app/(afterLogin)/[username]/_component/header";
import TimeLineNav from "@/app/(afterLogin)/[username]/_component/time-line-nav";
import style from "@/app/(afterLogin)/[username]/user-profile.module.css";
import { useParams } from "next/navigation";

export default function ProfileLayout() {
  const params = useParams();
  if (params.id) return null;

  return (
    <main className={style.container}>
      <Header />
      <TimeLineNav />
    </main>
  );
}
