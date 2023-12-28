import Image from "next/image";
import style from "./follow-recommend.module.css";
export default function FollowRecommend() {
  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <Image
          className={style.userLogo}
          src={"/blue-moon.png"}
          alt={"프로필"}
          width={40}
          height={40}
        />
      </div>
      <div className={style.userInfoSection}>
        <div className={style.userInfo}>
          <div className={style.title}>대원님</div>
          <div className={style.userId}>@BigOne_good</div>
        </div>
        <div className={style.followButtonSection}>
          <button className={style.actionButton}>팔로우</button>
        </div>
      </div>
    </div>
  );
}
