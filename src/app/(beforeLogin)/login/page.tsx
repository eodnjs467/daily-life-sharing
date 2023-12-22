"use client";

import { useRouter } from "next/navigation";
import MainPage from "@/app/(beforeLogin)/_component/main";
import { useEffect } from "react";

export default function RedirectLoginPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/i/flow/login");
  }, []);

  return <MainPage />;
}
