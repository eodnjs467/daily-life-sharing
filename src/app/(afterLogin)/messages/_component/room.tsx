import style from "@/app/(afterLogin)/messages/messages.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Room() {
  return (
    //  TODO: 주소 변경
    <Link href={"/messages/13"} className={style.chat}>
      <div className={style.profile}>
        <Image src={"/blue-moon.png"} alt={"profile"} width={40} height={40} />
      </div>
      <div className={style.user}>
        <div className={style.userInfo}>
          <span>대원님</span>
          @BigOne
          <span>·</span>몇 초
        </div>
        <div className={style.lastMessage}>안녕히 가세요</div>
      </div>
    </Link>
  );
}
