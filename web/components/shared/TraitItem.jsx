import React from "react";
import { Col, Row } from "antd";
import Styles from "/styles/scss/web/Trait.module.scss";
import ForeverIcon from "/public/assets/images/svgs/forever.svg";
import ForeverDarkIcon from "/public/assets/images/svgs/dark/forever.svg";
import MultyIcon from "/public/assets/images/svgs/multy.svg";
import MultyDarkIcon from "/public/assets/images/svgs/dark/multy.svg";
export default function TraitItem({
  theme = true,
  icon,
  title,
  text,
  forever = false,
  multy = false,
}) {
  return (
    <Row>
      <Col span={24}>
        <div className={theme ? Styles.lightTraitItem : Styles.darkTraitItem}>
          <div className={Styles.icon}>{icon}</div>
          <div>
            <p className={theme ? Styles.lightTitle : Styles.darkTitle}>
              {title}
            </p>
          </div>
          <div>
            <p className={theme ? Styles.lightText : Styles.darkText}>{text}</p>
          </div>
          {forever ? (
            <div className={Styles.forever}>
              {theme ? <ForeverIcon /> : <ForeverDarkIcon />}
            </div>
          ) : null}
          {multy ? (
            <div className={Styles.multy}>
              {theme ? <MultyIcon /> : <MultyDarkIcon />}
            </div>
          ) : null}
        </div>
      </Col>
    </Row>
  );
}
