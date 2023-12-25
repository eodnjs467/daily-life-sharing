import Link from "next/link";
import Image from "next/image";
import styles from "./main.module.css";

export default function MainPage() {
  return (
    <>
      <div className={styles.left}>
        <Image src={"/blue-moon.png"} alt={"로고"} width={500} height={500} />
      </div>
      <div className={styles.right}>
        <h1>오늘 당신에게 일어난 일</h1>
        <h2>지금 들려주세요</h2>
        <Link href={"/i/flow/signup"} className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 가입하셨나요?</h3>
        <Link href={"/login"} className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
