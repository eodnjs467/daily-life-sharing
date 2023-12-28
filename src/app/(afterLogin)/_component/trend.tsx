import Link from "next/link";
import style from "./trend.module.css";

export default function Trend() {
  return (
    <Link href={""} className={style.trend}>
      <div className={style.count}>대한민국에서 트렌드 중</div>
      <div className={style.title}>대원님</div>
      <div className={style.count}>32,520 posts</div>
    </Link>
  );
}
