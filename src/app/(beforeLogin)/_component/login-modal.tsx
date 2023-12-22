"use client";
import style from "./login-modal.module.css";
import BackButton from "@/app/(beforeLogin)/_component/back-button";
export default function LoginModal() {
  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.header}>
          <BackButton />
          <div>로그인</div>
        </div>
        <form>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor={"email"}>
                이메일
              </label>
              <input id={"email"} type={"email"} className={style.input} />
            </div>
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor={"password"}>
                비밀번호
              </label>
              <input
                id={"password"}
                type={"password"}
                className={style.input}
              />
            </div>
          </div>
          <div className={style.modalFooter}>
            <button className={style.actionButton} disabled={false}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
