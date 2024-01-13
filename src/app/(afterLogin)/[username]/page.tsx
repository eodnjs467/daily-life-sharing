import style from "./user-profile.module.css";
import Post from "@/app/(afterLogin)/home/_component/post";
export default function UserProfilePage() {
  return (
    <section className={style.timeLineSection}>
      <h1>대원님의 게시글</h1>
      <Post />
    </section>
  );
}
