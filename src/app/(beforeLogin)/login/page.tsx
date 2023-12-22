"use client";
import { useRouter } from "next/navigation";
import MainPage from "@/app/(beforeLogin)/_component/main";

export default function RedirectLoginPage() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <MainPage />;
}
