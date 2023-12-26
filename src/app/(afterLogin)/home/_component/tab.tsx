"use client";

import style from "./tab.module.css";
import { useContext, useState } from "react";
import { TabContext } from "@/app/(afterLogin)/home/_component/tab-context";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onClickFol = () => setTab("fol");
  const onClickRec = () => setTab("rec");

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTabWrapper}>
        <div className={style.homeTab} onClick={onClickRec}>
          <span className={style.tabTitle}>추천</span>
          <div className={style.tabIndicator} hidden={tab === "fol"} />
        </div>
        <div className={style.homeTab} onClick={onClickFol}>
          <span className={style.tabTitle}>팔로우 중</span>
          <div className={style.tabIndicator} hidden={tab === "rec"} />
        </div>
      </div>
    </div>
  );
}
