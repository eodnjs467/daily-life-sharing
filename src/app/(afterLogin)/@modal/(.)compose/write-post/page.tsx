"use client";

import style from "./post-modal.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";
export default function PostModal() {
  const router = useRouter();
  const imgRef = useRef(null);

  const onClickClose = () => {
    router.back();
  };
  return (
    <div className={style.container}>
      <div className={style.modal}>
        <button className={style.closeButton} onClick={onClickClose}>
          x
        </button>
        <form className={style.modalForm}>
          <div className={style.modalBody}>
            <div className={style.userSection}>
              <Image
                className={style.profile}
                src={"/blue-moon.png"}
                alt={"profile"}
                width={40}
                height={40}
              />
            </div>
            <div className={style.inputDiv}>
              <textarea
                className={style.input}
                placeholder={"무슨 일이 일어나고 있나요?"}
              ></textarea>
            </div>
          </div>
          <div className={style.modalFooter}>
            <div className={style.modalDivider} />
            <div className={style.footerButtons}>
              <div className={style.footerButtonLeft}>
                <input
                  type={"file"}
                  name={"imageFiles"}
                  multiple
                  hidden
                  ref={imgRef}
                />
                <div className={style.uploadButtons}>
                  <button className={style.fileButton} type={"button"}>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 1024.00 1024.00"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#1d8cff"
                      stroke="#1d8cff"
                      strokeWidth="0.01024"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#CCCCCC"
                        strokeWidth="24.576"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#1d8cff"
                          d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
                        ></path>
                        <path
                          fill="#1d8cff"
                          d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                  <button className={style.gifButton} type={"button"}>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#1d9bf0"
                      strokeWidth="0.00024000000000000003"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#CCCCCC"
                        strokeWidth="0.624"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M17.61 21.71H6.39C5.29996 21.71 4.25456 21.277 3.48379 20.5062C2.71302 19.7354 2.28 18.69 2.28 17.6V6.38C2.28 5.28996 2.71302 4.24457 3.48379 3.4738C4.25456 2.70302 5.29996 2.27 6.39 2.27H17.61C18.7 2.27 19.7454 2.70302 20.5162 3.4738C21.287 4.24457 21.72 5.28996 21.72 6.38V17.6C21.72 18.69 21.287 19.7354 20.5162 20.5062C19.7454 21.277 18.7 21.71 17.61 21.71ZM6.39 3.77C5.69778 3.77 5.03392 4.04499 4.54445 4.53446C4.05498 5.02393 3.78 5.68779 3.78 6.38V17.6C3.78 18.2922 4.05498 18.9561 4.54445 19.4456C5.03392 19.935 5.69778 20.21 6.39 20.21H17.61C18.3022 20.21 18.9661 19.935 19.4555 19.4456C19.945 18.9561 20.22 18.2922 20.22 17.6V6.38C20.22 5.68779 19.945 5.02393 19.4555 4.53446C18.9661 4.04499 18.3022 3.77 17.61 3.77H6.39Z"
                          fill="#1d9bf0"
                        ></path>
                        <path
                          d="M7.86 14.9C7.09087 14.9 6.35325 14.5945 5.80939 14.0506C5.26553 13.5068 4.96 12.7691 4.96 12C4.96 11.2309 5.26553 10.4933 5.80939 9.9494C6.35325 9.40554 7.09087 9.10001 7.86 9.10001C8.05891 9.10001 8.24968 9.17902 8.39033 9.31968C8.53098 9.46033 8.61 9.65109 8.61 9.85001C8.61 10.0489 8.53098 10.2397 8.39033 10.3803C8.24968 10.521 8.05891 10.6 7.86 10.6C7.61706 10.6014 7.37866 10.6659 7.16823 10.7873C6.9578 10.9087 6.78259 11.0828 6.65981 11.2924C6.53703 11.5021 6.47091 11.74 6.46796 11.983C6.465 12.2259 6.52531 12.4654 6.64296 12.6779C6.76061 12.8905 6.93154 13.0688 7.13895 13.1953C7.34637 13.3218 7.58313 13.3921 7.82596 13.3994C8.06879 13.4066 8.30934 13.3506 8.52395 13.2367C8.73856 13.1229 8.91985 12.9551 9.05 12.75H8.59C8.39109 12.75 8.20032 12.671 8.05967 12.5303C7.91902 12.3897 7.84 12.1989 7.84 12C7.84 11.8011 7.91902 11.6103 8.05967 11.4697C8.20032 11.329 8.39109 11.25 8.59 11.25H10C10.1981 11.2526 10.3874 11.3324 10.5275 11.4725C10.6676 11.6126 10.7474 11.8019 10.75 12C10.7474 12.7666 10.4424 13.5012 9.90125 14.0442C9.36012 14.5872 8.62658 14.8947 7.86 14.9Z"
                          fill="#1d9bf0"
                        ></path>
                        <path
                          d="M12.65 14.89C12.5511 14.8914 12.453 14.8729 12.3614 14.8357C12.2698 14.7984 12.1866 14.7433 12.1167 14.6733C12.0468 14.6034 11.9916 14.5202 11.9544 14.4286C11.9171 14.337 11.8987 14.2389 11.9 14.14V9.84001C11.9 9.6411 11.979 9.45033 12.1197 9.30968C12.2603 9.16903 12.4511 9.09001 12.65 9.09001C12.8489 9.09001 13.0397 9.16903 13.1803 9.30968C13.321 9.45033 13.4 9.6411 13.4 9.84001V14.14C13.4 14.3389 13.321 14.5297 13.1803 14.6703C13.0397 14.811 12.8489 14.89 12.65 14.89Z"
                          fill="#1d9bf0"
                        ></path>
                        <path
                          d="M15.33 14.9C15.1319 14.8974 14.9426 14.8176 14.8025 14.6775C14.6624 14.5374 14.5826 14.3481 14.58 14.15V9.85001C14.58 9.65109 14.659 9.46033 14.7997 9.31968C14.9403 9.17902 15.1311 9.10001 15.33 9.10001C15.5289 9.10001 15.7197 9.17902 15.8603 9.31968C16.001 9.46033 16.08 9.65109 16.08 9.85001V14.15C16.08 14.2485 16.0606 14.346 16.0229 14.437C15.9852 14.528 15.93 14.6107 15.8603 14.6803C15.7907 14.75 15.708 14.8052 15.617 14.8429C15.526 14.8806 15.4285 14.9 15.33 14.9Z"
                          fill="#1d9bf0"
                        ></path>
                        <path
                          d="M17.93 12.81H15.33C15.1311 12.81 14.9403 12.731 14.7997 12.5903C14.659 12.4497 14.58 12.2589 14.58 12.06C14.58 11.8611 14.659 11.6703 14.7997 11.5297C14.9403 11.389 15.1311 11.31 15.33 11.31H17.93C18.1289 11.31 18.3197 11.389 18.4603 11.5297C18.601 11.6703 18.68 11.8611 18.68 12.06C18.68 12.2589 18.601 12.4497 18.4603 12.5903C18.3197 12.731 18.1289 12.81 17.93 12.81Z"
                          fill="#1d9bf0"
                        ></path>
                        <path
                          d="M17.93 10.6H15.33C15.1311 10.6 14.9403 10.521 14.7997 10.3803C14.659 10.2397 14.58 10.0489 14.58 9.85001C14.58 9.65109 14.659 9.46033 14.7997 9.31968C14.9403 9.17902 15.1311 9.10001 15.33 9.10001H17.93C18.1289 9.10001 18.3197 9.17902 18.4603 9.31968C18.601 9.46033 18.68 9.65109 18.68 9.85001C18.68 10.0489 18.601 10.2397 18.4603 10.3803C18.3197 10.521 18.1289 10.6 17.93 10.6Z"
                          fill="#1d9bf0"
                        ></path>
                      </g>
                    </svg>
                  </button>
                  <button className={style.emoticonButton} type={"button"}>
                    <svg
                      viewBox="0 0 64 64"
                      height="20px"
                      width="20x"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="3"
                      stroke="#1d9bf0"
                      fill="none"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <circle
                          cx="32"
                          cy="32"
                          r="25.74"
                          strokeLinecap="round"
                        ></circle>
                        <path
                          d="M43.38,38.63a13.54,13.54,0,0,1-11.46,6.61,13.51,13.51,0,0,1-11.3-6.34"
                          strokeLinecap="round"
                        ></path>
                        <circle
                          cx="23.62"
                          cy="25.5"
                          r="1.12"
                          strokeLinecap="round"
                        ></circle>
                        <circle
                          cx="40.36"
                          cy="25.5"
                          r="1.12"
                          strokeLinecap="round"
                        ></circle>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <button className={style.actionButton}>게시하기</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
