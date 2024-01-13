"use client";

import Link from "next/link";
import style from "@/app/(afterLogin)/search/search.module.css";
import { useState } from "react";
import cx from "classnames";

export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const onClickHot = () => setCurrent("hot");
  const onClickNew = () => setCurrent("new");
  const onClickUser = () => setCurrent("user");
  const onClickMedia = () => setCurrent("media");

  return (
    <>
      <div
        className={cx(style.tab, current === "hot" && style.active)}
        onClick={onClickHot}
      >
        <Link href={"/search?q="}>인기</Link>
        <div className={style.indicator} hidden={current !== "hot"} />
      </div>
      <div
        className={cx(style.tab, current === "new" && style.active)}
        onClick={onClickNew}
      >
        <Link href={'/search?q=""&f=live'}>최신</Link>
        <div className={style.indicator} hidden={current !== "new"} />
      </div>
      <div
        className={cx(style.tab, current === "user" && style.active)}
        onClick={onClickUser}
      >
        <Link href={'/search?q=""&f=user'}>사용자</Link>
        <div className={style.indicator} hidden={current !== "user"} />
      </div>
      <div
        className={cx(style.tab, current === "media" && style.active)}
        onClick={onClickMedia}
      >
        <Link href={'/search?q=""&f=media'}>미디어</Link>
        <div className={style.indicator} hidden={current !== "media"} />
      </div>
    </>
  );
}
