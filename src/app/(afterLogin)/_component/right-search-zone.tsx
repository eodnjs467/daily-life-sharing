import style from "./right-search-zone.module.css";
import SearchForm from "@/app/(afterLogin)/_component/search-form";
export default function RightSearchZone() {
  return (
    <div className={style.container}>
      <SearchForm />
    </div>
  );
}
