"use client";

import style from "./time-line-nav.module.css";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function TimeLineNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className={style.timeLineNav}>
      <div className={style.navTab}>
        <Link className={style.navTitle} href={"/daewon"}>
          게시물
        </Link>
        <div className={style.tabIndicator} hidden={segment !== null} />
      </div>
      <div className={style.navTab}>
        <Link className={style.navTitle} href={"/daewon/with_replies"}>
          답글
        </Link>
        <div className={style.tabIndicator} hidden={segment !== "replies"} />
      </div>
      <div className={style.navTab}>
        <Link className={style.navTitle} href={"/daewon/highlights"}>
          하이라이트
        </Link>
        <div className={style.tabIndicator} hidden={segment !== "highlights"} />
      </div>
      <div className={style.navTab}>
        <Link className={style.navTitle} href={"/daewon/media"}>
          미디어
        </Link>
        <div className={style.tabIndicator} hidden={segment !== "media"} />
      </div>
      <div className={style.navTab}>
        <Link className={style.navTitle} href={"/daewon/likes"}>
          마음에 들어요
        </Link>
        <div className={style.tabIndicator} hidden={segment !== "likes"} />
      </div>
    </nav>
  );
}
