import style from "./trend-section.module.css";
import Trend from "@/app/(afterLogin)/_component/trend";
export default function TrendSection() {
  return (
    <div className={style.trendBackground}>
      <div className={style.trendContainer}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
