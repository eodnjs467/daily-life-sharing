import style from "./post.module.css";
import Image from "next/image";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "@/app/(afterLogin)/home/_component/action-buttons";
import PostArticle from "@/app/(afterLogin)/home/_component/post-article";

dayjs.locale("ko");
dayjs.extend(relativeTime);
export default function Post() {
  const target = {
    id: 1,
    User: {
      id: "대원님",
      nickname: "@BigOne",
      image: "/blue-moon.png",
    },
    content: "안녕하세요. 더미 게시글 입니다.",
    createAt: new Date(),
    Images: [],
  };
  return (
    <PostArticle post={target}>
      <div className={style.post}>
        <div className={style.imageSection}>
          <Image
            className={style.profile}
            src={target.User.image}
            alt={"profile"}
            width={40}
            height={40}
          />
        </div>
        <div className={style.postSection}>
          <div className={style.userInfoSection}>
            <div className={style.userInfo}>
              <div>
                <span className={style.nickname}>{target.User.id}</span>
              </div>
              <div>
                <span className={style.email}>{target.User.nickname}</span>
                <span className={style.division}>·</span>
                <span className={style.time}>
                  {dayjs(target.createAt).fromNow(true)}
                </span>
              </div>
            </div>
            <div>...</div>
          </div>
          <div className={style.postDescription}>{target.content}</div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
