import style from "./explore.module.css";
import SearchForm from "@/app/(afterLogin)/_component/search-form";
import Trend from "@/app/(afterLogin)/_component/trend";

export default function ExplorePage() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <div className={style.title}>
          <h2>나를 위한 트렌드</h2>
        </div>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
