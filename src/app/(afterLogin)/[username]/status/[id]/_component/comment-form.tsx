"use client";

import style from "@/app/(afterLogin)/[username]/status/[id]/detail-post.module.css";
import Image from "next/image";
import { useRef } from "react";

export default function CommentForm() {
  const imgRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {};
  const onChange = () => {};
  const onClickButton = () => {};

  return (
    <form className={style.me} onSubmit={onSubmit}>
      <div className={style.profile}>
        <Image src={"/blue-moon.png"} alt={"profile"} width={40} height={40} />
      </div>
      <div className={style.commentBody}>
        <textarea placeholder={"답글 게시하기"} onChange={onChange} />
        <div className={style.postButtonSection}>
          <input type={"file"} multiple hidden ref={imgRef} />
          <button
            className={style.uploadButton}
            type={"button"}
            onClick={onClickButton}
          >
            image
          </button>
        </div>
      </div>
      <button className={style.actionButton}>답글</button>
    </form>
  );
}
