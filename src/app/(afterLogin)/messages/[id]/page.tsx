import style from "./chatroom.module.css";
import BackButton from "@/app/(afterLogin)/_component/back-button";
import Image from "next/image";
export default function ChatRoomPage() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <BackButton />
        <h1>대원님</h1>
      </div>
      <div className={style.body}>
        <div className={style.user}>
          <div className={style.profile}>
            <Image
              src={"/blue-moon.png"}
              alt={"profile"}
              width={60}
              height={60}
            />
          </div>
          <div className={style.nickname}>대원님</div>
          <div className={style.email}>@BigOne</div>
          <div className={style.signup}>가입일: 2024년 1월</div>
          <div className={style.followInfo}>
            내가 팔로우하는 사용자 중에는 팔로워가 없습니다.
          </div>
        </div>
        <div className={style.divider}></div>
        <div className={style.chatZone}>
          <div className={style.me}>안녕하세요 ~ 얼마에 파시나요?</div>
          <div className={style.otherPerson}>네 안녕하세요. 30만원 입니다.</div>
        </div>
      </div>
    </div>
  );
}
