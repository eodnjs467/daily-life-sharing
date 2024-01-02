import style from "./search.module.css";
import SearchForm from "@/app/(afterLogin)/_component/search-form";
import Tab from "@/app/(afterLogin)/search/_component/tab";
import Post from "@/app/(afterLogin)/home/_component/post";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string; f?: string };
}) {
  return (
    <div className={style.container}>
      <div className={style.headerSection}>
        <div className={style.header}>
          <button className={style.backButton}>
            <svg
              width={20}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-z80fyv r-19wmn03"
            >
              <g>
                <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
              </g>
            </svg>
          </button>
          <div className={style.searchBar}>
            <SearchForm q={searchParams?.q} />
          </div>
        </div>
        <nav className={style.nav}>
          <Tab />
        </nav>
      </div>
      <div className={style.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
