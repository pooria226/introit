import React from "react";
import Styles from "/styles/scss/web/Error.module.scss";
export default function Error({ text }) {
  return (
    <span className={Styles.wrapper}>
      <span className="pl-2">{text}</span>
    </span>
  );
}
