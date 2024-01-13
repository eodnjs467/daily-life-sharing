import { ReactNode } from "react";
import ProfileLayout from "@/app/(afterLogin)/[username]/_component/profile-layout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ProfileLayout />
      {children}
    </>
  );
}
