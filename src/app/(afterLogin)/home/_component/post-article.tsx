"use client";

import style from "@/app/(afterLogin)/home/_component/post.module.css";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  User: {
    id: string;
    nickname: string;
  };
}
export default function PostArticle({
  children,
  post,
}: {
  children: ReactNode;
  post: Post;
}) {
  const router = useRouter();
  const onClick = () => router.push(`/daewon/status/1`);
  return (
    <article onClickCapture={onClick} className={style.container}>
      {children}
    </article>
  );
}
