import { ReactNode } from "react";
import style from "@/app/(afterLogin)/[username]/user-profile.module.css";
import Image from "next/image";
import Link from "next/link";
import TimeLineNav from "@/app/(afterLogin)/[username]/_component/time-line-nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className={style.container}>
        <div className={style.headerSection}>
          <button className={style.backButton}>
            <svg
              width={20}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-z80fyv r-19wmn03"
            >
              <g>
                <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
              </g>
            </svg>
          </button>
          <div className={style.headerTitle}>
            <div className={style.userName}>
              <div className={style.nickname}>대원님</div>
              <div className={style.count}>2 게시물</div>
            </div>
          </div>
        </div>
        <div className={style.userSection}>
          <div className={style.userBackground} />
          <div className={style.user}>
            <div className={style.userInner}>
              <div className={style.profileZone}>
                <div className={style.profile}>
                  <div className={style.profileBottom} />
                  <div className={style.imageDiv}>
                    <Image
                      className={style.image}
                      src={"/blue-moon.png"}
                      alt={"프로필"}
                      width={140}
                      height={140}
                    />
                  </div>
                </div>
                <div className={style.settingDiv}>
                  <Link className={style.setting} href={""}>
                    프로필 설정하기
                  </Link>
                </div>
              </div>
              <div className={style.userInfo}>
                <div className={style.nickname}>대원님</div>
                <div className={style.email}>@BigOne</div>
              </div>
            </div>
            <div className={style.signDate}>
              <svg
                width={19}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-14j79pv r-1d4mawv"
              >
                <g>
                  <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                </g>
              </svg>
              가입일: 2012년 12월
            </div>
            <div className={style.followZone}>
              <div>
                <span>0</span> 팔로우 중
              </div>
              <div>
                <span>0</span> 팔로워
              </div>
            </div>
          </div>
        </div>
        <TimeLineNav />
        {children}
      </main>
    </>
  );
}
