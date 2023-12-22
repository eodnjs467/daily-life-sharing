import style from "./signup-modal.module.css";
import BackButton from "@/app/(beforeLogin)/_component/back-button";
export default function SignupModal() {
  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.header}>
          <BackButton />
          <h1>계정을 생성하세요</h1>
        </div>
        <form>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor={"email"}>
                이메일
              </label>
              <input id={"email"} className={style.input} required />
            </div>
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor={"password"}>
                비밀번호
              </label>
              <input
                id={"password"}
                className={style.input}
                type={"password"}
                required
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.label} htmlFor={"email"}>
                프로필
              </label>
              <input
                id={"image"}
                className={style.input}
                type={"file"}
                accept={"image/*"}
              />
            </div>
          </div>
          <div className={style.modalFooter}>
            <button className={style.actionButton}>가입하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}
