import style from "./messages.module.css";
import Room from "@/app/(afterLogin)/messages/_component/room";

export default function MessagePage() {
  return (
    <section className={style.container}>
      <h1>쪽지</h1>
      <div className={style.body}>
        <Room />
        <Room />
        <Room />
      </div>
    </section>
  );
}
