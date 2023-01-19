import React from "react";
import Styles from "/styles/scss/web/DividerItem.module.scss";
export default function DividerItem({ theme, text }) {
  return (
    <div>
      <p className={theme ? Styles.lightText : Styles.darkText}>{text}</p>
    </div>
  );
}
